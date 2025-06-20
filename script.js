document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementsById('registration-form')

    const feedbackDiv = this.documentElement.getElementById('form-feedback')

    form.addEventListener('submit', function(Event) {
        Event.preventDefault();
    });

    let isValid = true;

    const messages = [];

    // Validate Username
    const userNameInput = document.getElementById('username');
    const username = userNameInput.value.trim();
    if (username.length < 3) {
        isValid = false;
        messages.push("Length of Username must be more than 3 characters");
    }

    // Validate Email 
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email) {
        isValid = false;
        messages.push("Invaild Email");
    }

    // Validate Password
    const passwordInput = document.getElementById('password');
    const password = passwordInput.value.trim();
    if (password.length >= 8) {
        isValid = false;
        messages.push("Password must have at least 8 characters");
    }


});
