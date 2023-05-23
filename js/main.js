import { nameOne, nameTwo } from "./names.js";

const initApp = () => {
    document.getElementById("submitForm").addEventListener("submit", (event) => {
        event.preventDefault();
        clearSuggestions();
        const namesArray = generateNames();
        console.log(namesArray);
        displayNames(namesArray);
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

const displayNames = (namesArray) => {
    const list = document.querySelector('.suggestionSection ol');
    // const rawRegion = document.getElementById("submitSection__textInput").value;
    // const region = sanitizeInput(rawRegion);
    namesArray.forEach(name => {
        list.innerHTML += `<li>
            <a href="https://worldofwarcraft.blizzard.com/en-us/search?q=${name}" target="_blank">${name}</a>
            </li>`;
            /* list.innerHTML += `<li>
            <a href="https://yoututbe.com/${name}" target="_blank">${name}</a></li>`;
            list.innerHTML += `<ul>
            <li><a href="https://youtube.com/${firstName}s${name}" target="_blank">${firstName}s${name}</a></li>
            <li><a href="https://youtube.com/${name}With${firstName}" target="_blank">${name}With${firstName}</a></li>
            </ul>`; */
    });
    const display = document.getElementById("suggestionSection");
    if (display.classList.contains("hidden")) display.classList.toggle("hidden");
}

const sanitizeInput = (inputValue) => {
    const div = document.createElement('div');
    div.textContent = inputValue;
    return div.innerHTML;
}