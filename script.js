document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementsById('registration-form');

    const feedbackDiv = document.getElementById('form-feedback');
    feedbackDiv.style.display = block;
    if (isValid == true) {
        feedbackDiv.textContent = "Registration successful!";
        feedbackDiv.style.color = '#28a745';
    }
    else {
        feedbackDiv.innerHTML = messages.join("<br>");
        feedbackDiv.style.color = '#dc3545';
    }

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
        alert("Length of Username must be more than 3 characters");
        messages.push("Length of Username must be more than 3 characters");
    }

    // Validate Email 
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
        isValid = false;
        alert("Invalid Email");
        messages.push("Invaild Email");
    }

    // Validate Password
    const passwordInput = document.getElementById('password');
    const password = passwordInput.value.trim();
    if (password.length >= 8) {
        isValid = false;
        alert("Password must have at least 8 characters");
        messages.push("Password must have at least 8 characters");
    }
    console.log(messages)

});
