document.addEventListener('DOMContentLoaded', () => {
    try {
        console.log('Hello World!');
        initializeButton();
    } catch (error) {
        console.error('An error occurred:', error);
    }
});

function initializeButton() {
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', () => {
            alert('Button clicked!');
        });
    } else {
        console.warn('Button not found');
    }
}
