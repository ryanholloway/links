document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'D';
    toggleButton.classList.add('toggle-button');
    document.querySelector('.container').prepend(toggleButton);

    const userPrefersDark = localStorage.getItem('dark-mode');
    if (userPrefersDark === null) {
        
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-mode');
        }
    } else if (userPrefersDark === 'true') {
        document.body.classList.add('dark-mode');
    }

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('dark-mode', isDarkMode);
    });
});