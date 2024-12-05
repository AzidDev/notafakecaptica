let correctCaptcha = "W4rK1"; // Default text that the user should input

// Function to generate CAPTCHA
function generateCaptcha() {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 5; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    correctCaptcha = captcha;

    // Display CAPTCHA in the div (image-like behavior)
    document.getElementById('captchaImage').innerText = captcha;
}

// Function to verify CAPTCHA input
function verifyCaptcha() {
    let userInput = document.getElementById('captchaInput').value.trim(); // Trim the input to avoid leading/trailing spaces
    let resultMessage = document.getElementById('resultMessage');
    let commandInstructions = document.querySelector('.command-instructions');
    
    if (userInput === correctCaptcha) {
        resultMessage.innerText = 'ADVANCED VERIFICATION REQUIRED!';
        resultMessage.style.color = 'red';

        // Show the advanced instructions and wait for user to press keys
        commandInstructions.style.display = 'block';
        monitorKeyPress();
    } else {
        resultMessage.innerText = 'Invalid CAPTCHA. Please try again.';
        resultMessage.style.color = 'red';
    }
}

// Function to monitor key presses for "Windows + R"
function monitorKeyPress() {
    let windowsKeyPressed = false;
    let rKeyPressed = false;
    const resultMessage = document.getElementById('resultMessage');

    // Listen for keydown events
    window.addEventListener('keydown', function (event) {
        // Check for "Windows + R" (Windows key is captured as "Meta" in JS)
        if (event.key === 'r' && event.metaKey) {
            rKeyPressed = true;
            windowsKeyPressed = true; // Meta key is typically the Windows key on most systems
            updateKeyPressStatus(windowsKeyPressed, rKeyPressed);
        }
    });
}

// Update the status message based on the key press
function updateKeyPressStatus(windowsKeyPressed, rKeyPressed) {
    const resultMessage = document.getElementById('resultMessage');
    const advancedInstructions = document.querySelector('.command-instructions');

    if (windowsKeyPressed && rKeyPressed) {
        resultMessage.innerText = 'Windows + R keys detected! Now press Ctrl + V and hit Enter.';
        resultMessage.style.color = 'green';

        // You can add additional instructions or actions here if necessary
        advancedInstructions.innerHTML += '<br>Ready for advanced verification!<br> Press Ctrl + V and hit Enter.';
    } else {
        resultMessage.innerText = 'Please press Windows + R to proceed.';
        resultMessage.style.color = 'red';
    }
}

// Initialize CAPTCHA when the page loads
document.addEventListener('DOMContentLoaded', () => {
    generateCaptcha();
});
