window.addEventListener('DOMContentLoaded', () => {
    if (window.Telegram?.WebApp) {
        Telegram.WebApp.ready();
        Telegram.WebApp.expand();
    }

    const englishBtn = document.getElementById('english');
    const ukrainianBtn = document.getElementById('ukrainian');
    const screen = document.getElementById('screen');

    function showLanguageScreen(name, flagURL) {
        // fade out current screen
        screen.classList.add('fade-out');

        setTimeout(() => {
            // replace content
            screen.innerHTML = `
                <div id="language-screen" class="show">
                    <img src="${flagURL}" alt="${name} Flag">
                    <div>${name}</div>
                </div>
            `;

            // Remove fade-out from parent container
            screen.classList.remove('fade-out');

        }, 500); // match CSS fade-out duration
    }

    englishBtn.addEventListener('click', () => {
        showLanguageScreen('English', 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg');
    });

    ukrainianBtn.addEventListener('click', () => {
        showLanguageScreen('Ukrainian', 'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg');
    });
});