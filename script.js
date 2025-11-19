// Initialize Telegram Web App
window.addEventListener('DOMContentLoaded', () => {
    if (window.Telegram?.WebApp) {
        Telegram.WebApp.ready();
        Telegram.WebApp.expand(); // request fullscreen
    } else {
        console.warn("Telegram WebApp is not available. Are you opening this outside Telegram?");
    }
});