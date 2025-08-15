//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async function () {
    const text = document.getElementById("text").value;
    const delay = parseInt(document.getElementById("delay").value);
    const output = document.getElementById("output");

    // Clear previous output
    output.textContent = "";

    // If no input or invalid delay
    if (!text || isNaN(delay) || delay < 0) {
        alert("Please enter valid text and a positive delay in milliseconds.");
        return;
    }

    // Function to simulate delay using Promise
    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Async function to show message after delay
    async function showMessage() {
        await wait(delay); // Wait for given milliseconds
        output.textContent = text; // Display the text in output div
    }

    showMessage();
});
