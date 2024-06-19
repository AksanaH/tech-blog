const addCommentHandler = async (event) => {
    event.preventDefault();
    const url = new URL(window.location.href);
    let splitedPath = url.pathname.split("/");
    const text = document.querySelector('#comment-text').value.trim();

    if (text) {
        const response = await fetch(`/posts/comment/${splitedPath.pop()}`, {
            method: 'POST',
            body: JSON.stringify({ text }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to update a post');
        }
    }
};

document
    .querySelector('.new-comment-form')
    .addEventListener('submit', addCommentHandler);