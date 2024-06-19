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

const deleteButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/posts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete post');
        }
    }
};

document
    .querySelector('.edit-post-form')
    .addEventListener('submit', updatePostHandler);

document
    .querySelector('.delete')
    .addEventListener('click', deleteButtonHandler);