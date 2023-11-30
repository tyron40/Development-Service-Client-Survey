document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('surveyForm');
    const progressBar = document.querySelector('.progress-bar');

    // Initialize progress to 0%
    progressBar.style.width = '0%';

    // Listen for form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Simulate form submission (you can replace this with your actual submission logic)
        setTimeout(function () {
            // After a successful submission, you can redirect the user to a thank you page
            alert('Survey submitted successfully. Thank you!');
            form.reset(); // Reset the form
            progressBar.style.width = '0%'; // Reset progress
        }, 1000); // Simulating a delay of 1 second for submission

        // Update progress bar (you can adjust this based on the number of questions)
        progressBar.style.width = '100%';
    });
});
