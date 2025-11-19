// Initialize Telegram Web App
window.addEventListener('DOMContentLoaded', () => {
    if (window.Telegram?.WebApp) {
        Telegram.WebApp.ready();
        Telegram.WebApp.expand();
    } else {
        console.warn("Telegram WebApp is not available.");
    }

    // Button actions
    const option1 = document.getElementById('option1');
    const option2 = document.getElementById('option2');

    option1.addEventListener('click', () => {
        alert('You chose Option 1!');
    });

    option2.addEventListener('click', () => {
        alert('You chose Option 2!');
    });
});