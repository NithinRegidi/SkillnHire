document.addEventListener('DOMContentLoaded', function() {
    // Show login form on page load
    document.getElementById('login-form-container').classList.remove('hidden');

    // Handle login form submission
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        // Simple client-side check for demonstration
        if (username === "user" && password === "password") {
            // Hide login form and show profile form
            document.getElementById('login-form-container').classList.add('hidden');
            document.getElementById('profile-form-container').classList.remove('hidden');
        } else {
            alert('Invalid username or password.');
        }
    });

    // Handle register form submission
    document.getElementById('register-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // Assume registration is successful
        alert('Registration successful! Please log in.');
        document.querySelector('.user_login').classList.remove('hidden');
        document.querySelector('.user_register').classList.add('hidden');
    });

    // Switch to registration form
    document.getElementById('register_form').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.user_login').classList.add('hidden');
        document.querySelector('.user_register').classList.remove('hidden');
    });

    // Switch to login form
    document.getElementById('login_form').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.user_register').classList.add('hidden');
        document.querySelector('.user_login').classList.remove('hidden');
    });
});
