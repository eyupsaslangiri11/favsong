document.addEventListener('DOMContentLoaded', () => {
    const waveButton = document.getElementById('waveButton');
    let isWaving = false;

    waveButton.addEventListener('click', () => {
        if (!isWaving) {
            waveButton.classList.add('wave-effect');
            waveButton.textContent = 'Stop Wave';
            isWaving = true;
        } else {
            waveButton.classList.remove('wave-effect');
            waveButton.textContent = 'Wave Effect';
            isWaving = false;
        }
    });
});