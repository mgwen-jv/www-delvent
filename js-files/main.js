document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const formContainer = document.getElementById('formContainer');
    const notificationCard = document.getElementById('notificationCard');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Get form data
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;

            // Here you would typically send this data to your server
            // For this example, we'll just log it to the console
            console.log('Form submitted:', { firstName, lastName, email });

            // Hide the form container
            if (formContainer) {
                formContainer.style.display = 'none';
            }

            // Show the notification card
            if (notificationCard) {
                notificationCard.style.display = 'block';
            }

            // Optionally, you can reset the form here
            form.reset();
        });
    }

    // Optional: Add functionality to close the notification card
    const closeNotification = document.getElementById('closeNotification');
    if (closeNotification) {
        closeNotification.addEventListener('click', function() {
            notificationCard.style.display = 'none';
            formContainer.style.display = 'block';
        });
    }
});
