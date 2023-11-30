document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simulate progress bar animation
    let progressBar = document.querySelector('.progress-bar');
    let currentWidth = parseInt(progressBar.style.width, 10);
    if (isNaN(currentWidth)) {
        currentWidth = 0;
    }
    
    // Increment progress by 10% for each answered question
    currentWidth += 10;
    if (currentWidth > 100) {
        currentWidth = 100;
    }
    
    progressBar.style.width = currentWidth + '%';
    
    // Check if survey is complete (progress = 100%)
    if (currentWidth === 100) {
        alert('Survey completed successfully!');
        // You can redirect to a "Thank You" page or perform other actions here
    }
});
