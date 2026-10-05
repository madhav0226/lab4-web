// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const countrySelect = document.getElementById('countrySelect');
    const capitalText = document.getElementById('capitalText');
    const capitalBox = document.getElementById('capitalDisplay');

    // Listen for changes on the country dropdown
    countrySelect.addEventListener('change', (event) => {
        const capital = event.target.value;

        if (capital) {
            // Update capital text content
            capitalText.textContent = capital;
            capitalText.classList.remove('placeholder');
            capitalBox.classList.add('active');

            // Trigger smooth pop-in animation
            capitalText.classList.remove('animate');
            void capitalText.offsetWidth; // Force DOM reflow to restart animation
            capitalText.classList.add('animate');
        } else {
            capitalText.textContent = 'None selected';
            capitalText.classList.add('placeholder');
            capitalBox.classList.remove('active');
        }
    });
});
