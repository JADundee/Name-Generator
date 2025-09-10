import {
  bloodElfNameOneM,
  bloodElfNameOneF,
  bloodElfNameTwo,
} from "./races/bloodElf.js";
import {
  darkironDwarfNameOneM,
  darkironDwarfNameOneF,
  darkironDwarfNameTwo,
} from "./races/darkironDwarf.js";
import { dracthyrNameOneM, dracthyrNameOneF } from "./races/dracthyr.js";
import { draeneiNameOneM, draeneiNameOneF } from "./races/draenei.js";
import { dwarfNameOneM, dwarfNameOneF, dwarfNameTwo } from "./races/dwarf.js";
import { gnomeNameOneM, gnomeNameOneF, gnomeNameTwo } from "./races/gnome.js";
import {
  goblinNameOneM,
  goblinNameOneF,
  goblinNameTwo,
} from "./races/goblin.js";
import {
  highmountainTaurenNameOneM,
  highmountainTaurenNameOneF,
  highmountainTaurenNameTwo,
} from "./races/highmountainTauren.js";
import { humanNameOneM, humanNameOneF, humanNameTwo } from "./races/human.js";
import {
  kulTiranNameOneM,
  kulTiranNameOneF,
  kulTiranNameTwo,
} from "./races/kulTiran.js";
import {
  lightforgedDraeneiNameOneM,
  lightforgedDraeneiNameOneF,
} from "./races/lightforgedDraenei.js";
import {
  magharOrcNameOneM,
  magharOrcNameOneF,
  magharOrcNameTwo,
} from "./races/mag'harOrc.js";
import {
  mechagnomeNameOneM,
  mechagnomeNameOneF,
  mechagnomeNameTwo,
} from "./races/mechagnome.js";
import {
  nightborneNameOneM,
  nightborneNameOneF,
  nightborneNameTwo,
} from "./races/nightborne.js";
import {
  nightElfNameOneM,
  nightElfNameOneF,
  nightElfNameTwo,
} from "./races/nightElf.js";
import { orcNameOneM, orcNameOneF, orcNameTwo } from "./races/orc.js";
import {
  pandarenNameOneM,
  pandarenNameOneF,
  pandarenNameTwo,
} from "./races/pandaren.js";
import {
  taurenNameOneM,
  taurenNameOneF,
  taurenNameTwo,
} from "./races/tauren.js";
import { trollNameOneM, trollNameOneF, trollNameTwo } from "./races/troll.js";
import {
  forsakenNameOneM,
  forsakenNameOneF,
  forsakenNameTwo,
} from "./races/forsaken.js";
import {
  voidElfNameOneM,
  voidElfNameOneF,
  voidElfNameTwo,
} from "./races/voidElf.js";
import { vulperaNameOneM, vulperaNameOneF } from "./races/vulpera.js";
import {
  worgenNameOneM,
  worgenNameOneF,
  worgenNameTwo,
} from "./races/worgen.js";
import {
  zandalariTrollNameOneM,
  zandalariTrollNameOneF,
  zandalariTrollNameTwo,
} from "./races/zandalariTroll.js";
import regionObject from "./regions/regionObject.js";

const initApp = () => {
  document.getElementById("submitForm").addEventListener("submit", (event) => {
    event.preventDefault();
    clearSuggestions();
    const namesArray = generateNames();
    displayNames(namesArray);
  });
};

document.addEventListener("DOMContentLoaded", initApp);

const clearSuggestions = () => {
  const display = document.getElementById("suggestionSection");
  if (!display.classList.contains("hidden")) display.classList.toggle("hidden");
  const list = document.querySelector(".suggestionSection ol");
  list.innerHTML = "";
};

async function fetchToken() {
  const response = await fetch("https://devserver-main--majestic-parfait-596444.netlify.app/.netlify/functions/get-token"); // backend endpoint
  if (!response.ok) {
    throw new Error(`Failed to fetch token: ${response.status}`);
  }
  const data = await response.json();
  return data.token;
}

const generateNames = () => {
  var raceSelection = document.getElementById("submitSection__races").value;
  var sexSelection = document.querySelector('input[name="gender"]:checked');

  //TODO: ternary statement refactor

  if (!raceSelection) {
    // randomly select a race if none is chosen
    const availableRaces = [
      "bloodElf",
      "darkironDwarf",
      "dracthyr",
      "draenei",
      "dwarf",
      "forsaken",
      "gnome",
      "goblin",
      "highmountainTauren",
      "human",
      "kulTiran",
      "lightforgedDraenei",
      "mag'harOrc",
      "mechagnome",
      "nightborne",
      "nightElf",
      "orc",
      "pandaren",
      "tauren",
      "troll",
      "voidElf",
      "vulpera",
      "worgen",
      "zandalariTroll",
    ];

    raceSelection =
      availableRaces[Math.floor(Math.random() * availableRaces.length)];
    console.log(`${raceSelection} racial names have been generated`);
  }

  if (sexSelection) {
    sexSelection = sexSelection.value;
  } else {
    const availableSexes = ["male", "female"];
    sexSelection =
      availableSexes[Math.floor(Math.random() * availableSexes.length)];
    console.log(`${sexSelection} gendered names have been generated`);
  }

  if (raceSelection === "bloodElf" && sexSelection === "male") {
    var nameOne = bloodElfNameOneM;
    var nameTwo = bloodElfNameTwo;
  }
  if (raceSelection === "bloodElf" && sexSelection === "female") {
    var nameOne = bloodElfNameOneF;
    var nameTwo = bloodElfNameTwo;
  }

  if (raceSelection === "darkironDwarf" && sexSelection === "male") {
    var nameOne = darkironDwarfNameOneM;
    var nameTwo = darkironDwarfNameTwo;
  }
  if (raceSelection === "darkironDwarf" && sexSelection === "female") {
    var nameOne = darkironDwarfNameOneF;
    var nameTwo = darkironDwarfNameTwo;
  }

  if (raceSelection === "dracthyr" && sexSelection === "male") {
    var nameOne = dracthyrNameOneM;
    var nameTwo = "";
  }
  if (raceSelection === "dracthyr" && sexSelection === "female") {
    var nameOne = dracthyrNameOneF;
    var nameTwo = "";
  }

  if (raceSelection === "draenei" && sexSelection === "male") {
    var nameOne = draeneiNameOneM;
    var nameTwo = "";
  }
  if (raceSelection === "draenei" && sexSelection === "female") {
    var nameOne = draeneiNameOneF;
    var nameTwo = "";
  }

  if (raceSelection === "dwarf" && sexSelection === "male") {
    var nameOne = dwarfNameOneM;
    var nameTwo = dwarfNameTwo;
  }
  if (raceSelection === "dwarf" && sexSelection === "female") {
    var nameOne = dwarfNameOneF;
    var nameTwo = dwarfNameTwo;
  }

  if (raceSelection === "gnome" && sexSelection === "male") {
    var nameOne = gnomeNameOneM;
    var nameTwo = gnomeNameTwo;
  }
  if (raceSelection === "gnome" && sexSelection === "female") {
    var nameOne = gnomeNameOneF;
    var nameTwo = gnomeNameTwo;
  }

  if (raceSelection === "goblin" && sexSelection === "male") {
    var nameOne = goblinNameOneM;
    var nameTwo = goblinNameTwo;
  }
  if (raceSelection === "goblin" && sexSelection === "female") {
    var nameOne = goblinNameOneF;
    var nameTwo = goblinNameTwo;
  }

  if (raceSelection === "highmountainTauren" && sexSelection === "male") {
    var nameOne = highmountainTaurenNameOneM;
    var nameTwo = highmountainTaurenNameTwo;
  }
  if (raceSelection === "highmountainTauren" && sexSelection === "female") {
    var nameOne = highmountainTaurenNameOneF;
    var nameTwo = highmountainTaurenNameTwo;
  }

  if (raceSelection === "human" && sexSelection === "male") {
    var nameOne = humanNameOneM;
    var nameTwo = humanNameTwo;
  }
  if (raceSelection === "human" && sexSelection === "female") {
    var nameOne = humanNameOneF;
    var nameTwo = humanNameTwo;
  }

  if (raceSelection === "kulTiran" && sexSelection === "male") {
    var nameOne = kulTiranNameOneM;
    var nameTwo = kulTiranNameTwo;
  }
  if (raceSelection === "kulTiran" && sexSelection === "female") {
    var nameOne = kulTiranNameOneF;
    var nameTwo = kulTiranNameTwo;
  }

  if (raceSelection === "lightforgedDraenei" && sexSelection === "male") {
    var nameOne = lightforgedDraeneiNameOneM;
    var nameTwo = "";
  }
  if (raceSelection === "lightforgedDraenei" && sexSelection === "female") {
    var nameOne = lightforgedDraeneiNameOneF;
    var nameTwo = "";
  }

  if (raceSelection === "mag'harOrc" && sexSelection === "male") {
    var nameOne = magharOrcNameOneM;
    var nameTwo = magharOrcNameTwo;
  }
  if (raceSelection === "mag'harOrc" && sexSelection === "female") {
    var nameOne = magharOrcNameOneF;
    var nameTwo = magharOrcNameTwo;
  }

  if (raceSelection === "mechagnome" && sexSelection === "male") {
    var nameOne = mechagnomeNameOneM;
    var nameTwo = mechagnomeNameTwo;
  }
  if (raceSelection === "mechagnome" && sexSelection === "female") {
    var nameOne = mechagnomeNameOneF;
    var nameTwo = mechagnomeNameTwo;
  }

  if (raceSelection === "nightborne" && sexSelection === "male") {
    var nameOne = nightborneNameOneM;
    var nameTwo = nightborneNameTwo;
  }
  if (raceSelection === "nightborne" && sexSelection === "female") {
    var nameOne = nightborneNameOneF;
    var nameTwo = nightborneNameTwo;
  }

  if (raceSelection === "nightElf" && sexSelection === "male") {
    var nameOne = nightElfNameOneM;
    var nameTwo = nightElfNameTwo;
  }
  if (raceSelection === "nightElf" && sexSelection === "female") {
    var nameOne = nightElfNameOneF;
    var nameTwo = nightElfNameTwo;
  }

  if (raceSelection === "orc" && sexSelection === "male") {
    var nameOne = orcNameOneM;
    var nameTwo = orcNameTwo;
  }
  if (raceSelection === "orc" && sexSelection === "female") {
    var nameOne = orcNameOneF;
    var nameTwo = orcNameTwo;
  }

  if (raceSelection === "pandaren" && sexSelection === "male") {
    var nameOne = pandarenNameOneM;
    var nameTwo = pandarenNameTwo;
  }
  if (raceSelection === "pandaren" && sexSelection === "female") {
    var nameOne = pandarenNameOneF;
    var nameTwo = pandarenNameTwo;
  }

  if (raceSelection === "tauren" && sexSelection === "male") {
    var nameOne = taurenNameOneM;
    var nameTwo = taurenNameTwo;
  }
  if (raceSelection === "tauren" && sexSelection === "female") {
    var nameOne = taurenNameOneF;
    var nameTwo = taurenNameTwo;
  }

  if (raceSelection === "troll" && sexSelection === "male") {
    var nameOne = trollNameOneM;
    var nameTwo = trollNameTwo;
  }
  if (raceSelection === "troll" && sexSelection === "female") {
    var nameOne = trollNameOneF;
    var nameTwo = trollNameTwo;
  }

  if (raceSelection === "forsaken" && sexSelection === "male") {
    var nameOne = forsakenNameOneM;
    var nameTwo = forsakenNameTwo;
  }
  if (raceSelection === "forsaken" && sexSelection === "female") {
    var nameOne = forsakenNameOneF;
    var nameTwo = forsakenNameTwo;
  }

  if (raceSelection === "voidElf" && sexSelection === "male") {
    var nameOne = voidElfNameOneM;
    var nameTwo = voidElfNameTwo;
  }
  if (raceSelection === "voidElf" && sexSelection === "female") {
    var nameOne = voidElfNameOneF;
    var nameTwo = voidElfNameTwo;
  }

  if (raceSelection === "vulpera" && sexSelection === "male") {
    var nameOne = vulperaNameOneM;
    var nameTwo = "";
  }
  if (raceSelection === "vulpera" && sexSelection === "female") {
    var nameOne = vulperaNameOneF;
    var nameTwo = "";
  }

  if (raceSelection === "worgen" && sexSelection === "male") {
    var nameOne = worgenNameOneM;
    var nameTwo = worgenNameTwo;
  }
  if (raceSelection === "worgen" && sexSelection === "female") {
    var nameOne = worgenNameOneF;
    var nameTwo = worgenNameTwo;
  }

  if (raceSelection === "zandalariTroll" && sexSelection === "male") {
    var nameOne = zandalariTrollNameOneM;
    var nameTwo = zandalariTrollNameTwo;
  }
  if (raceSelection === "zandalariTroll" && sexSelection === "female") {
    var nameOne = zandalariTrollNameOneF;
    var nameTwo = zandalariTrollNameTwo;
  }

  if (nameTwo === "") {
    var nameTwo = nameOne;
  }

  const randomNumberArray1 = [];
  const randomNumberArray2 = [];
  for (let i = 0; i < Object.values(nameOne).length; ) {
    const randomNumber1 = Math.floor(
      Math.random() * Object.values(nameOne).length
    );
    if (randomNumberArray1.includes(randomNumber1)) continue;
    randomNumberArray1.push(randomNumber1);
    i++;
  }
  for (let i = 0; i < Object.values(nameTwo).length; ) {
    const randomNumber2 = Math.floor(
      Math.random() * Object.values(nameTwo).length
    );
    if (randomNumberArray2.includes(randomNumber2)) continue;
    randomNumberArray2.push(randomNumber2);
    i++;
  }

  const suggestion1 = nameOne[randomNumberArray1[3]];

  const suggestion2 = nameOne[randomNumberArray1[2]];

  const suggestion3 = nameOne[randomNumberArray1[1]];

  const suggestion4 = nameOne[randomNumberArray1[0]];

  const suggestion5 = nameTwo[randomNumberArray2[1]];

  const suggestion6 = nameTwo[randomNumberArray2[3]];

  const suggestion7 = nameTwo[randomNumberArray2[0]];

  const suggestion8 = nameTwo[randomNumberArray2[1]];

  const suggestion9 = nameTwo[randomNumberArray2[1]];

  const suggestion10 = nameTwo[randomNumberArray2[0]];

  const regex = /\w+/g;
  const suggestionOne = suggestion1.match(regex).join("");
  const suggestionTwo = suggestion2.match(regex).join("");
  const suggestionThree = suggestion3.match(regex).join("");
  const suggestionFour = suggestion4.match(regex).join("");
  const suggestionFive = suggestion5.match(regex).join("");
  const suggestionSix = suggestion6.match(regex).join("");
  const suggestionSeven = suggestion7.match(regex).join("");
  const suggestionEight = suggestion8.match(regex).join("");

  var roll5 = suggestion9.match(regex).join("");
  var roll6 = suggestion10.match(regex).join("");

  var roll1 = suggestionOne + suggestionFive;
  var roll2 = suggestionTwo + suggestionSix;
  var roll3 = suggestionThree + suggestionSeven;
  var roll4 = suggestionFour + suggestionEight;

  if (document.querySelector('input[name="checkbox"]').checked === true) {
    if (roll1.length > 12) {
      var roll1 = suggestionOne;
    }
    if (roll2.length > 12) {
      var roll2 = suggestionTwo;
    }
    if (roll3.length > 12) {
      var roll3 = suggestionThree;
    }
    if (roll4.length > 12) {
      var roll4 = suggestionFour;
    }
    if (roll5.length > 12) {
      var roll5 = suggestionFive;
    }
    if (roll6.length > 12) {
      var roll6 = suggestionSix;
    }
  }

  return [roll1, roll2, roll3, roll4, roll5, roll6];
};

const displayNames = (namesArray) => {
  const list = document.querySelector(".suggestionSection ol");
  list.innerHTML = ""; // clear old names
  namesArray.forEach((name) => {
    list.innerHTML += `<ul><a>${name}</a></ul>`;
  });

  const display = document.getElementById("suggestionSection");
  if (display.classList.contains("hidden")) display.classList.toggle("hidden");

  document.querySelectorAll(".suggestionSection ol ul a").forEach((el) => {
    el.addEventListener("click", async (event) => {
      const selection = event.target.textContent;
      const characterName = selection.toLowerCase();

      const region = document.getElementById("submitSection__regions").value;
      const serverName = document.getElementById(
        "submitSection__servers"
      ).value;
      const server = regionObject[region] && serverName;

      if (!server) {
        console.error("No server selected");
        return;
      }

      const realmSlug = server.toLowerCase().replace(/\s+/g, "-");

      try {
        // ✅ Get fresh token from backend
        const token = await fetchToken();

        const url = `https://${region}.api.blizzard.com/profile/wow/character/${realmSlug}/${characterName}/appearance?namespace=profile-${region}&locale=en_US`;
        console.log(url);

        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          alert(`${selection} is taken on ${realmSlug}`);
        } else {
          alert(`${selection} is available on ${realmSlug}`);
        }
      } catch (err) {
        console.error("Token or API error:", err);
        alert("Failed to check name. Try again later.");
      }
    });
  });
};

window.onload = function () {
  var regionSel = document.getElementById("submitSection__regions"),
    serverSel = document.getElementById("submitSection__servers");
  for (var x in regionObject) {
    regionSel.options[regionSel.options.length] = new Option(x, x);
  }
  regionSel.onchange = function () {
    serverSel.length = 1;
    if (this.selectededIndex < 1) return;
    const realms = regionObject[this.value];
    for (const realm of realms) {
      serverSel.options[serverSel.options.length] = new Option(realm, realm);
    }
  };
  regionSel.onchange();
};