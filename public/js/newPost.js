const newPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const text = document.querySelector('#post-content').value.trim();

    if (title && text) {
        const response = await fetch(`/posts`, {
            method: 'POST',
            body: JSON.stringify({ title, text }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create a post');
        }
    }
};

document
    .querySelector('.new-post-form')
    .addEventListener('submit', newPostHandler);