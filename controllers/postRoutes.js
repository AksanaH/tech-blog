const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});
//added:id
router.put('/:id', withAuth, async (req, res) => {
    // update a post by its `id` value
    try {
        const newPost = await Post.update(req.body, {

            where: {
                id: req.params.id,

            },
        });
        if (!newPost[0]) {
            res.status(404).json({ message: 'No categories found with this id!!' });
            return;
        }
        res.status(200).json(newPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

//added:id
router.get('/comment/:id', async (req, res) => {
    // update a post by its `id` value
    try {

        // Get all projects and JOIN with user data
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        // Serialize data so the template can read it
        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('homepage', {
            id: req.params.id,
            posts,
            dashboard: false
        });
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

module.exports = router;