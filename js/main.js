import { nameOne, nameTwo } from "./names.js";

const initApp = () => {
    document.getElementById("submitForm").addEventListener("submit", (event) => {
        event.preventDefault();
        clearSuggestions();
        // Generate names
        // Display names
    });
}

document.addEventListener("DOMContentLoaded", initApp);

const clearSuggestions = () => {
    const display = document.getElementById("suggestionSection");
    if (!display.classList.contains("hidden")) display.classList.toggle("hidden");
    const list = document.querySelector('.suggestionSection ol');
    list.innerHTML = "";
}