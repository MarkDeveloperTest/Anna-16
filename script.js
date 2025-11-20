window.addEventListener('DOMContentLoaded', () => {
    // Telegram Mini App init
    if (window.Telegram?.WebApp) {
        Telegram.WebApp.ready();
        Telegram.WebApp.expand();
    }

    const englishBtn = document.getElementById('english');
    const ukrainianBtn = document.getElementById('ukrainian');
    const screen = document.getElementById('screen');

    function showLanguageScreen(name, flagURL) {
        screen.innerHTML = `
            <div id="language-screen">
                <img src="${flagURL}" alt="${name} Flag">
                <div>${name}</div>
            </div>
        `;
    }

    englishBtn.addEventListener('click', () => {
        showLanguageScreen('English', 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg');
    });

    ukrainianBtn.addEventListener('click', () => {
        showLanguageScreen('Ukrainian', 'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg');
    });
});