import { nameOne, nameTwo } from "./names.js";

const initApp = () => {
    document.getElementById("submitForm").addEventListener("submit", (event) => {
        event.preventDefault();
        clearSuggestions();
        const namesArray = generateNames();
        console.log(namesArray);
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

const generateNames = () => {
    const randomNumberArray = [];
    for (let i = 0; i < 4;) {
        const randomNumber = Math.floor(Math.random() * 10);
        if (randomNumberArray.includes(randomNumber)) continue;
        randomNumberArray.push(randomNumber);
        i++;
    }
    const suggestion1 = nameOne[randomNumberArray[0]] + nameTwo[randomNumberArray[3]];
    const suggestion2 = nameOne[randomNumberArray[1]] + nameTwo[randomNumberArray[0]];
    const suggestion3 = nameOne[randomNumberArray[2]] + nameTwo[randomNumberArray[2]];
    const suggestion4 = nameOne[randomNumberArray[3]] + nameTwo[randomNumberArray[1]];

    return [suggestion1, suggestion2, suggestion3, suggestion4];
}