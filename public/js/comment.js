const addCommentHandler = async (event) => {
    event.preventDefault();
    const url = new URL(window.location.href);
    let splitedPath = url.pathname.split("/");
    const title = document.querySelector('#post-title').value.trim();
    const text = document.querySelector('#post-content').value.trim();
    t
    if (title && text) {
        const response = await fetch(`/posts/comment/${splitedPath.pop()}`, {
            method: 'POST',
            body: JSON.stringify({ title, text }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to update a post');
        }
    }
};

document
    .querySelector('.new-comment-form')
    .addEventListener('submit', addCommentHandler);