// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Get the elements
    const loginContainer = document.getElementById('login');
    const signupContainer = document.getElementById('signup');
    const toggleButton = document.getElementById('toggle-button');

    // Function to show the login form and hide the signup form
    function showLoginForm() {
        loginContainer.style.display = 'block';
        signupContainer.style.display = 'none';
        toggleButton.textContent = 'Switch to Signup';
    }

    // Function to show the signup form and hide the login form
    function showSignupForm() {
        loginContainer.style.display = 'none';
        signupContainer.style.display = 'block';
        toggleButton.textContent = 'Switch to Login';
    }

    // Add click event to toggle button
    toggleButton.addEventListener('click', function() {
        if (loginContainer.style.display === 'block') {
            showSignupForm();
        } else {
            showLoginForm();
        }
    });

    // Initially show the login form
    showLoginForm();
});
