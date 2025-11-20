window.addEventListener('DOMContentLoaded', () => {
    if (window.Telegram?.WebApp) {
        Telegram.WebApp.ready();
        Telegram.WebApp.expand();
    }

    const englishBtn = document.getElementById('english');
    const ukrainianBtn = document.getElementById('ukrainian');

    englishBtn.addEventListener('click', () => {
        Telegram.WebApp.sendData(JSON.stringify({ language: "English" }));
    });

    ukrainianBtn.addEventListener('click', () => {
        Telegram.WebApp.sendData(JSON.stringify({ language: "Ukrainian" }));
    });
});