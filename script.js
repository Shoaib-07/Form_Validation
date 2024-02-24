document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Reset error messages
    document.getElementById('errorMessages').innerHTML = '';

    // Validation
    if (fullName.length < 5) {
        showError('Name must be at least 5 characters');
    }
    else if (!email.includes('.')) {
        showError('Enter a valid email address');
    }
    else if (phone === '123456789') {
        showError('Enter a valid 10 digit Phone number');
    }
    else if (phone.length !== 10) {
        showError('Phone number should be 10 digit of numbers');
    }
    else if (password.length < 8) {
        showError('Password must be at least 8 characters');
    }
    else if (password === 'password' || password === fullName || password === 'Password') {
        showError('Password is not  strong');
    }
    else if (password !== confirmPassword) {
        showError('Passwords did not match');
    }

    // If no errors, submit the form
    else if (document.getElementById('errorMessages').innerHTML === '') {
        // Here we can submit the form
        alert('Form submitted successfully!');
        document.getElementById('registrationForm').reset(); // Reset the form
    }
});

// Function to display error messages
function showError(message) {
    var errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(message));
    document.getElementById('errorMessages').appendChild(errorDiv);
}
