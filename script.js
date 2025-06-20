document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementsById('registration-form')

    const feedbackDiv = this.documentElement.getElementById('form-feedback')

    const userNameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function(Event) {
        Event.preventDefault();
    });
});
