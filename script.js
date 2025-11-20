// Initialize Telegram Web App
window.addEventListener('DOMContentLoaded', () => {
    if (window.Telegram?.WebApp) {
        Telegram.WebApp.ready();
        Telegram.WebApp.expand();
    }

    // Buttons
    const option1 = document.getElementById('option1');
    const option2 = document.getElementById('option2');

    option1.addEventListener('click', () => {
        console.log('Option 1 pressed');
    });

    option2.addEventListener('click', () => {
        console.log('Option 2 pressed');
    });
});