const words = document.querySelectorAll('.word');

// Function to start or restart the animation
function startAnimation() {
  words.forEach(word => {
    word.style.animation = 'fade-in 2s linear infinite';
  });
}

// Function to pause the animation
function pauseAnimation() {
  words.forEach(word => {
    word.style.animationPlayState = 'paused';
  });
}

// Start the animation initially
startAnimation();

// Add event listeners for controlling the animation (optional)
document.getElementById('start-btn').addEventListener('click', startAnimation);
document.getElementById('pause-btn').addEventListener('click', pauseAnimation);

// Function to send location to Telegram
function sendLocationToTelegram(latitude, longitude) {
    const chatUsername = 'Safarmurod_7'; // Your Telegram username or chat ID
    const message = `https://t.me/${chatUsername}?text=My%20current%20location:%0ALatitude:%20${latitude}%0ALongitude:%20${longitude}`;

    window.open(message, '_blank');
}

// Function to get user's location and send to Telegram
function getLocationAndSendToTelegram() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                sendLocationToTelegram(latitude, longitude);
            },
            error => {
                console.error("Error getting location:", error);
                alert("Failed to get your location. Please try again.");
            }
        );
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}
