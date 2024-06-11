const updatePostHandler = async (event) => {
    event.preventDefault();
    const url = new URL(window.location.href);
    let splitedPath = url.pathname.split("/");
    const title = document.querySelector('#post-title').value.trim();
    const text = document.querySelector('#post-content').value.trim();

    if (title && text) {
        const response = await fetch(`/posts/${splitedPath.pop()}`, {
            method: 'PUT',
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
    .querySelector('.edit-post-form')
    .addEventListener('submit', updatePostHandler);