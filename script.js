window.addEventListener('DOMContentLoaded', () => {
    if (window.Telegram?.WebApp) {
        Telegram.WebApp.ready();
        Telegram.WebApp.expand();
    }

    const englishBtn = document.getElementById('english');
    const ukrainianBtn = document.getElementById('ukrainian');
    const screen = document.getElementById('screen');

    function fadeOut(element, callback) {
        element.classList.add('fade-out');
        setTimeout(callback, 500);
    }

    function showLanguageScreen(name, flagURL, nextScreen = null) {
        fadeOut(screen, () => {
            if (nextScreen === 'ukrainian-options') {
                screen.innerHTML = `
                    <div class="lesson-images">
                        <img src="screenshots/english_1.jpg" alt="Lesson 1">
                        <img src="screenshots/english_2.jpg" alt="Lesson 2">
                        <img src="screenshots/english_3.jpg" alt="Lesson 3">
                    </div>

                    <div class="question">
                        But I thought you were studying English!<br>
                        Do you still want to continue?
                    </div>
                    <div class="buttons">
                        <button id="yesLesson" class="btn blue"><span>Yes</span></button>
                        <button id="noLesson" class="btn red"><span>No</span></button>
                    </div>
                `;

                const yesBtn = document.getElementById('yesLesson');
                const noBtn = document.getElementById('noLesson');

                yesBtn.addEventListener('click', () => {
                    alert('You chose to continue English lessons!');
                });

                noBtn.addEventListener('click', () => {
                    alert('You chose not to continue English lessons.');
                });

            } else {
                screen.innerHTML = `
                    <div id="language-screen" class="show">
                        <img src="${flagURL}" alt="${name} Flag" width="80" height="50">
                        <div>${name}</div>
                    </div>
                `;
            }

            screen.classList.remove('fade-out');
        });
    }

    englishBtn.addEventListener('click', () => {
        showLanguageScreen(
            'English',
            'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg'
        );
    });

    ukrainianBtn.addEventListener('click', () => {
        showLanguageScreen(
            'Ukrainian',
            'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg',
            'ukrainian-options'
        );
    });
});