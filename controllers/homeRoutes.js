const router = require('express').Router();
const { Post, User } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        // Get all projects and JOIN with user data
        const blogsData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        // Serialize data so the template can read it
        const blogs = blogsData.map((post) => post.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('homepage', {
            blogs,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    console.log("before")
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    console.log("after")

    res.render('login');
});

module.exports = router;