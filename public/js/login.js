const loginFormHandler = async (event) => {
    event.preventDefault();
    if (event.currentTarget.nextElementSibling.className === 'login') {
        signupFormHandler(event)
    }
    else {
        // Collect values from the login form
        const username = document.querySelector('#username-login').value.trim();
        const password = document.querySelector('#password-login').value.trim();

        if (username && password) {
            // Send a POST request to the API endpoint
            const response = await fetch('/users/login', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                // If successful, redirect the browser to the profile page
                document.location.replace('/');
            } else {
                alert(response.statusText);
            }
        }
    }
};


const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        const response = await fetch('/users', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);