document.addEventListener("DOMContentLoaded", () => {
    // Initialize display with empty string
    document.getElementById("display").value = "";
});

// Function to append characters to the display
function appendCharacter(character) {
    document.getElementById("display").value += character;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Function to delete the last character from the display
function deleteLast() {
    let currentDisplay = document.getElementById("display").value;
    document.getElementById("display").value = currentDisplay.slice(0, -1);
}

// Function to calculate the result and display it
function calculateResult() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        alert("Invalid expression");
    }
}

// Function to add the result to memory (M+)
function addToMemory() {
    let currentMemory = parseFloat(localStorage.getItem("memory")) || 0;
    let currentDisplay = parseFloat(document.getElementById("display").value) || 0;
    localStorage.setItem("memory", (currentMemory + currentDisplay).toString());
}

// Function to clear the memory (MC)
function clearMemory() {
    localStorage.removeItem("memory");
}

// Function to recall the memory value (MR)
function recallMemory() {
    let currentMemory = parseFloat(localStorage.getItem("memory")) || 0;
    document.getElementById("display").value = currentMemory;
}
