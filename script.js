window.addEventListener('DOMContentLoaded', () => {
    const screen = document.getElementById('screen');

    function fadeOut(callback) {
        screen.style.transition = "opacity 2s";
        screen.style.opacity = 0;
        setTimeout(callback, 2000); // match transition duration
    }

    function fadeIn() {
        screen.style.transition = "opacity 2s";
        screen.style.opacity = 1;
    }

    function showLanguageScreen(lang) {
        fadeOut(() => {
            if (lang === 'english') {
                screen.innerHTML = `
                    <div class="question">Hmm, I thought you were studying English!</div>
                    <div class="lesson-images">
                        <img src="screenshots/english_1.jpg" alt="Lesson 1">
                        <img src="screenshots/english_2.jpg" alt="Lesson 2">
                        <img src="screenshots/english_3.jpg" alt="Lesson 3">
                    </div>
                    <div class="question-small">Do you still want to continue in English?</div>
                    <div class="buttons">
                        <a href="#" class="btn blue glow"><span>Yes</span></a>
                        <a href="#" class="btn red"><span>No</span></a>
                    </div>
                `;
            } else {
                screen.innerHTML = `
                    <div class="question">Хм, я думав, ти вчила англійську!</div>
                    <div class="lesson-images">
                        <img src="screenshots/english_1.jpg" alt="Lesson 1">
                        <img src="screenshots/english_2.jpg" alt="Lesson 2">
                        <img src="screenshots/english_3.jpg" alt="Lesson 3">
                    </div>
                    <div class="question-small">Ти все ще хочеш продовжувати англійську?</div>
                    <div class="buttons">
                        <a href="#" class="btn blue glow"><span>Так</span></a>
                        <a href="#" class="btn red"><span>Ні</span></a>
                    </div>
                `;
            }

            // Set opacity 0 first
            screen.style.opacity = 0;

            // Force reflow so transition works
            void screen.offsetWidth;

            // Fade in new content
            fadeIn();
        });
    }

    document.getElementById('english').addEventListener('click', () => showLanguageScreen('english'));
    document.getElementById('ukrainian').addEventListener('click', () => showLanguageScreen('ukrainian'));
});