// Function to get the current time in HCMC (Asia/Ho_Chi_Minh timezone)
function getCurrentDateTime() {
    const date = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit',
        timeZone: 'Asia/Ho_Chi_Minh'
    };
    const dateTime = date.toLocaleString('en-US', options);
    return dateTime;
}

// Update the LegitDateCheck text with the current time in HCMC
document.getElementById('legit-date-check').textContent = "THIS METHOD IS STILL UP AND RUNNING AS OF " + getCurrentDateTime();

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('after-login-section').style.display = 'block';
    document.getElementById('download-box').style.display = 'block';

    setTimeout(function() {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }, 3000);
});

document.querySelector('.hover-btn').addEventListener('mouseover', function() {
    document.querySelector('.hover-options').style.display = 'block';
});
