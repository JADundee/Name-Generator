import { bloodElfNameOneM, bloodElfNameOneF, bloodElfNameTwo } from "./bloodElf.js";
import { darkironDwarfNameOneM, darkironDwarfNameOneF, darkironDwarfNameTwo } from "./darkironDwarf.js";
import { dracthyrNameOneM, dracthyrNameOneF, dracthyrNameTwo } from "./dracthyr.js";
import { draeneiNameOneM, draeneiNameOneF, draeneiNameTwo } from "./draenei.js";
import { dwarfNameOneM, dwarfNameOneF, dwarfNameTwo } from "./dwarf.js";
import { gnomeNameOneM, gnomeNameOneF, gnomeNameTwo } from "./gnome.js";
import { goblinNameOneM, goblinNameOneF, goblinNameTwo } from "./goblin.js";
import { highmountainTaurenNameOneM, highmountainTaurenNameOneF, highmountainTaurenNameTwo } from "./highmountainTauren.js";
import { humanNameOneM, humanNameOneF, humanNameTwo } from "./human.js";
import { kulTiranNameOneM, kulTiranNameOneF, kulTiranNameTwo } from "./kulTiran.js";
import { lightforgedDraeneiNameOneM, lightforgedDraeneiNameOneF, lightforgedDraeneiNameTwo } from "./lightforgedDraenei.js";
import { magharOrcNameOneM, magharOrcNameOneF, magharOrcNameTwo } from "./mag'harOrc.js";
import { mechagnomeNameOneM, mechagnomeNameOneF, mechagnomeNameTwo } from "./mechagnome.js";
import { nightborneNameOneM, nightborneNameOneF, nightborneNameTwo } from "./nightborne.js";
import { nightElfNameOneM, nightElfNameOneF, nightElfNameTwo } from "./nightElf.js";
import { orcNameOneM, orcNameOneF, orcNameTwo } from "./orc.js";
import { pandarenNameOneM, pandarenNameOneF, pandarenNameTwo } from "./pandaren.js";
import { taurenNameOneM, taurenNameOneF, taurenNameTwo } from "./tauren.js";
import { trollNameOneM, trollNameOneF, trollNameTwo } from "./troll.js";
import { undeadNameOneM, undeadNameOneF, undeadNameTwo } from "./undead.js";
import { voidElfNameOneM, voidElfNameOneF, voidElfNameTwo } from "./voidElf.js";
import { vulperaNameOneM, vulperaNameOneF, vulperaNameTwo } from "./vulpera.js";
import { worgenNameOneM, worgenNameOneF, worgenNameTwo } from "./worgen.js";
import { zandalariTrollNameOneM, zandalariTrollNameOneF, zandalariTrollNameTwo } from "./zandalariTroll.js";



const initApp = () => {
    document.getElementById("submitForm").addEventListener("submit", (event) => {
        event.preventDefault();
        clearSuggestions();
        // selected Race function
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
    const raceSelection = document.getElementById("submitSection__races").value;
    const sexSelection = document.getElementById("submitSection__genders").value;

    //TODO: ternary statement refactor

    if (raceSelection === "bloodElf" && sexSelection === "male") {
        var nameOne = bloodElfNameOneM;
        var nameTwo = bloodElfNameTwo 
     }
    if (raceSelection === "bloodElf" && sexSelection === "female") {
        var nameOne = bloodElfNameOneF;
        var nameTwo = bloodElfNameTwo 
     }

    if (raceSelection === "darkironDwarf" && sexSelection === "male") {
        var nameOne = darkironDwarfNameOneM;
        var nameTwo = darkironDwarfNameTwo 
     }
    if (raceSelection === "darkironDwarf" && sexSelection === "female") {
        var nameOne = darkironDwarfNameOneF;
        var nameTwo = darkironDwarfNameTwo 
     }

     if (raceSelection === "dracthyr" && sexSelection === "male") {
        var nameOne = dracthyrNameOneM;
        var nameTwo = dracthyrNameTwo 
     }
    if (raceSelection === "dracthyr" && sexSelection === "female") {
        var nameOne = dracthyrNameOneF;
        var nameTwo = dracthyrNameTwo 
     }

     if (raceSelection === "draenei" && sexSelection === "male") {
        var nameOne = draeneiNameOneM;
        var nameTwo = draeneiNameTwo 
     }
    if (raceSelection === "draenei" && sexSelection === "female") {
        var nameOne = draeneiNameOneF;
        var nameTwo = draeneiNameTwo 
     }

    if (raceSelection === "dwarf" && sexSelection === "male") {
        var nameOne = dwarfNameOneM;
        var nameTwo = dwarfNameTwo 
     }
    if (raceSelection === "dwarf" && sexSelection === "female") {
        var nameOne = dwarfNameOneF;
        var nameTwo = dwarfNameTwo 
     }

    if (raceSelection === "gnome" && sexSelection === "male") {
       var nameOne = gnomeNameOneM;
       var nameTwo = gnomeNameTwo 
    }
    if (raceSelection === "gnome" && sexSelection === "female") {
        var nameOne = gnomeNameOneF;
        var nameTwo = gnomeNameTwo
    }

    if (raceSelection === "goblin" && sexSelection === "male") {
        var nameOne = goblinNameOneM;
        var nameTwo = goblinNameTwo 
     }
    if (raceSelection === "goblin" && sexSelection === "female") {
        var nameOne = goblinNameOneF;
        var nameTwo = goblinNameTwo 
     }

     if (raceSelection === "highmountainTauren" && sexSelection === "male") {
        var nameOne = highmountainTaurenNameOneM;
        var nameTwo = highmountainTaurenNameTwo 
     }
    if (raceSelection === "highmountainTauren" && sexSelection === "female") {
        var nameOne = highmountainTaurenNameOneF;
        var nameTwo = highmountainTaurenNameTwo 
     }

     if (raceSelection === "human" && sexSelection === "male") {
        var nameOne = humanNameOneM;
        var nameTwo = humanNameTwo 
     }
    if (raceSelection === "human" && sexSelection === "female") {
        var nameOne = humanNameOneF;
        var nameTwo = humanNameTwo 
     }

     if (raceSelection === "kulTiran" && sexSelection === "male") {
        var nameOne = kulTiranNameOneM;
        var nameTwo = kulTiranNameTwo 
     }
    if (raceSelection === "kulTiran" && sexSelection === "female") {
        var nameOne = kulTiranNameOneF;
        var nameTwo = kulTiranNameTwo 
     }

     if (raceSelection === "lightforgedDraenei" && sexSelection === "male") {
        var nameOne = lightforgedDraeneiNameOneM;
        var nameTwo = lightforgedDraeneiNameTwo 
     }
    if (raceSelection === "lightforgedDraenei" && sexSelection === "female") {
        var nameOne = lightforgedDraeneiNameOneF;
        var nameTwo = lightforgedDraeneiNameTwo 
     }

     if (raceSelection === "mag'harOrc" && sexSelection === "male") {
        var nameOne = magharOrcNameOneM;
        var nameTwo = magharOrcNameTwo 
     }
    if (raceSelection === "mag'harOrc" && sexSelection === "female") {
        var nameOne = magharOrcNameOneF;
        var nameTwo = magharOrcNameTwo 
     }

    if (raceSelection === "mechagnome" && sexSelection === "male") {
        var nameOne = mechagnomeNameOneM;
        var nameTwo = mechagnomeNameTwo 
     }
    if (raceSelection === "mechagnome" && sexSelection === "female") {
        var nameOne = mechagnomeNameOneF;
        var nameTwo = mechagnomeNameTwo 
     }

     if (raceSelection === "nightborne" && sexSelection === "male") {
        var nameOne = nightborneNameOneM;
        var nameTwo = nightborneNameTwo 
     }
    if (raceSelection === "nightborne" && sexSelection === "female") {
        var nameOne = nightborneNameOneF;
        var nameTwo = nightborneNameTwo 
     }

     if (raceSelection === "nightElf" && sexSelection === "male") {
        var nameOne = nightElfNameOneM;
        var nameTwo = nightElfNameTwo 
     }
    if (raceSelection === "nightElf" && sexSelection === "female") {
        var nameOne = nightElfNameOneF;
        var nameTwo = nightElfNameTwo 
     }

     if (raceSelection === "orc" && sexSelection === "male") {
        var nameOne = orcNameOneM;
        var nameTwo = orcNameTwo
    }
    if (raceSelection === "orc" && sexSelection === "female") {
        var nameOne = orcNameOneF;
        var nameTwo = orcNameTwo
    }

    if (raceSelection === "pandaren" && sexSelection === "male") {
        var nameOne = pandarenNameOneM;
        var nameTwo = pandarenNameTwo 
     }
    if (raceSelection === "pandaren" && sexSelection === "female") {
        var nameOne = pandarenNameOneF;
        var nameTwo = pandarenNameTwo 
     }

    if (raceSelection === "tauren" && sexSelection === "male") {
        var nameOne = taurenNameOneM;
        var nameTwo = taurenNameTwo
    }
    if (raceSelection === "tauren" && sexSelection === "female") {
        var nameOne = taurenNameOneF;
        var nameTwo = taurenNameTwo
    }

    if (raceSelection === "troll" && sexSelection === "male") {
        var nameOne = trollNameOneM;
        var nameTwo = trollNameTwo 
     }
    if (raceSelection === "troll" && sexSelection === "female") {
        var nameOne = trollNameOneF;
        var nameTwo = trollNameTwo 
     }

     if (raceSelection === "undead" && sexSelection === "male") {
        var nameOne = undeadNameOneM;
        var nameTwo = undeadNameTwo 
     }
    if (raceSelection === "undead" && sexSelection === "female") {
        var nameOne = undeadNameOneF;
        var nameTwo = undeadNameTwo 
     }

     if (raceSelection === "voidElf" && sexSelection === "male") {
        var nameOne = voidElfNameOneM;
        var nameTwo = voidElfNameTwo 
     }
    if (raceSelection === "voidElf" && sexSelection === "female") {
        var nameOne = voidElfNameOneF;
        var nameTwo = voidElfNameTwo 
     }

     if (raceSelection === "vulpera" && sexSelection === "male") {
        var nameOne = vulperaNameOneM;
        var nameTwo = vulperaNameTwo 
     }
    if (raceSelection === "vulpera" && sexSelection === "female") {
        var nameOne = vulperaNameOneF;
        var nameTwo = vulperaNameTwo 
     }
     
     if (raceSelection === "worgen" && sexSelection === "male") {
        var nameOne = worgenNameOneM;
        var nameTwo = worgenNameTwo 
     }
    if (raceSelection === "worgen" && sexSelection === "female") {
        var nameOne = worgenNameOneF;
        var nameTwo = worgenNameTwo 
     }

     if (raceSelection === "zandalariTroll" && sexSelection === "male") {
        var nameOne = zandalariTrollNameOneM;
        var nameTwo = zandalariTrollNameTwo 
     }
    if (raceSelection === "zandalariTroll" && sexSelection === "female") {
        var nameOne = zandalariTrollNameOneF;
        var nameTwo = zandalariTrollNameTwo 
     }


    //TODO: update second randomNumberArray to include 0 
    const randomNumberArray = [];
    for (let i = 0; i < 4;) {
        const randomNumber = Math.floor(Math.random() * 63);
        if (randomNumberArray.includes(randomNumber)) continue;
        randomNumberArray.push(randomNumber);
        i++;
    }
    const suggestion1 = nameOne[randomNumberArray[0]] 
    + nameTwo[randomNumberArray[3]];
    const suggestion2 = nameOne[randomNumberArray[1]] 
    + nameTwo[randomNumberArray[0]];
    const suggestion3 = nameOne[randomNumberArray[2]] 
    + nameTwo[randomNumberArray[2]];
    const suggestion4 = nameOne[randomNumberArray[3]] 
    + nameTwo[randomNumberArray[1]];

    return [suggestion1, suggestion2, suggestion3, suggestion4];
}

const displayNames = (namesArray) => {
    const list = document.querySelector('.suggestionSection ol');
    const region = document.getElementById("submitSection__regions").value;
    const server = regionObject[region][document.getElementById("submitSection__servers").value];
   
    namesArray.forEach(name => {
            list.innerHTML += `<ul>
            <a href="https://worldofwarcraft.blizzard.com/en-us/character/${region}/${server}/${name}" target="_blank">${name}</a>
            </ul>`;
    });
    const display = document.getElementById("suggestionSection");
    if (display.classList.contains("hidden")) display.classList.toggle("hidden");


    /* let url = `https://worldofwarcraft.blizzard.com/en-us/character/${region}/${server}/${name}`;
    function urlExists(url, callback) {
    fetch(url, { method: 'head' })
    .then(function(status) {
      callback(status.ok)
    });
  }
  
    urlExists(url, function(exists) {
        if (exists) {
        alert(`${name} is available on ${serverSel}!`)
        } else {
        alert(`${name} is taken on ${serverSel}.`)
        }
}); */
    
}

var regionObject = {
    
    "us": ["Aegwynn", "Aerie-Peak", "Agamaggan", "Aggramar", "Akama", "Alexstrasza", "Alleria", "Altar-of-Storms", "Alterac-Mountains", "Aman'Thul", "Andorhal", "Anetheron", "Antonidas", "Anub'arak", "Anvilmar", "Arathor", "Archimonde", "Area-52", "Argent-Dawn", "Arthas", "Arygos", "Auchindoun", "Azgalor", "Azjol-Nerub", "Azralon", "Azshara", "Azuremyst", "Baelgun", "Balnazzar", "Barthilas", "Black-Dragonflight", "Blackhand", "Blackrock", "Blackwater-Raiders", "Blackwing-Lair", "Blade's-Edge", "Bladefist", "Bleeding-Hollow", "Blood-Furnace", "Bloodhoof", "Bloodscalp", "Bonechewer", "Borean-Tundra", "Boulderfist", "Bronzebeard", "Burning-Blade", "Burning-Legion", "Caelestrasz", "Cairne", "Cenarion Circle", "Cenarius", "Cho'gall", "Chromaggus", "Coilfang", "Crushridge", "Daggerspine", "Dalaran", "Dalvengyr", "Dark-Iron", "Darkspear", "Darrowmere", "Dath'Remar", "Dawnbringer", "Deathwing", "Demon-Soul", "Dentarg", "Destromath", "Dethecus", "Detheroc", "Doomhammer", "Draenor", "Dragonblight", "Dragonmaw", "Drak'Tharon", "Drak'thul", "Draka", "Drakkari", "Dreadmaul", "Drenden", "Dunemaul", "Durotan", "Duskwood", "Earthen-Ring", "Echo-Isles", "Eitrigg", "Eldre'Thalas", "Elune", "Emerald-Dream", "Eonar", "Eredar", "Executus", "Exodar", "Farstriders", "Feathermoon", "Fenris", "Firetree", "Fizzcrank", "Frostmane", "Frostmourne", "Frostwolf", "Galakrond", "Gallywix", "Garithos", "Garona", "Garrosh", "Ghostlands", "Gilneas", "Gnomeregan", "Goldrinn", "Gorefiend", "Gorgonnash", "Greymane", "Grizzly-Hills", "Gul'dan", "Gundrak", "Gurubashi", "Hakkar", "Haomarush", "Hellscream", "Hydraxis", "Hyjal", "Icecrown", "Illidan", "Jaedenar", "Jubei'Thos", "Kael'thas", "Kalecgos", "Kargath", "Kel'Thuzad", "Khadgar", "Khaz-Modan", "Khaz'goroth", "Kil'jaeden", "Kilrogg", "Kirin-Tor", "Korgath", "Korialstrasz", "Kul Tiras", "Laughing-Skull", "Lethon", "Lightbringer", "Lightning's-Blade", "Lightninghoof", "Llane", "Lothar", "Madoran", "Maelstrom", "Magtheridon", "Maiev", "Mal'Ganis", "Malfurion", "Malorne", "Malygos", "Mannoroth", "Medivh", "Misha", "Mok'Nathal", "Moon-Guard", "Moonrunner", "Mug'thol", "Muradin", "Nagrand", "Nathrezim", "Nazgrel", "Nazjatar", "Nemesis", "Ner'zhul", "Nesingwary", "Nordrassil", "Norgannon", "Onyxia", "Perenolde", "Proudmoore", "Quel'Thalas", "Quel'dorei", "Ragnaros", "Ravencrest", "Ravenholdt", "Rexxar", "Rivendare", "Runetotem", "Sargeras", "Saurfang", "Scarlet-Crusade", "Scilla", "Sen'jin", "Sentinels", "Shadow-Council", "Shadowmoon", "Shadowsong", "Shandris", "Shattered-Halls", "Shattered-Hand", "Shu'halo", "Silver-Hand", "Silvermoon", "Sisters-of-Elune", "Skullcrusher", "Skywall", "Smolderthorn", "Spinebreaker", "Spirestone", "Staghelm", "Steamwheedle-Cartel", "Stonemaul", "Stormrage", "Stormreaver", "Stormscale", "Suramar", "Tanaris", "Terenas", "Terokkar", "Thaurissan", "The-Forgotten-Coast", "The-Scryers", "The-Underbog", "The-Venture-Co", "Thorium-Brotherhood", "Thrall", "Thunderhorn", "Thunderlord", "Tichondrius", "Tol-Barad", "Tortheldrin", "Trollbane", "Turalyon", "Twisting-Nether", "Uldaman", "Uldum", "Undermine", "Ursin", "Uther", "Vashj", "Vek'nilash", "Velen", "Warsong", "Whisperwind", "Wildhammer", "Windrunner", "Winterhoof", "Wyrmrest-Accord", "Ysera", "Ysondre", "Zangarmarsh", "Zul'jin", "Zuluhed"],
    

    "eu": ["Aegwynn", "Aerie-Peak", "Agamaggan", "Aggra-(Português)", "Aggramar", "Ahn'Qiraj", "Al'Akir", "Alexstrasza", "Alleria", "Alonsus", "Aman'Thul", "Ambossar", "Anachronos", "Anetheron", "Antonidas", "Anub'arak", "Arak-arahm", "Arathi", "Arathor", "Archimonde", "Area-52", "Argent-Dawn", "Arthas", "Arygos", "Ashenvale", "Aszune", "Auchindoun", "Azjol-Nerub	", "Azshara", "Azuregos", "Azuremyst", "Baelgun", "Balnazzar", "Blackhand", "Blackmoore", "Blackrock", "Blackscar", "Blade's-Edge", "Bladefist", "Bloodfeather", "Bloodhoof	", "Bloodscalp", "Blutkessel", "Booty-Bay", "Borean-Tundra", "Boulderfist", "Bronze-Dragonflight", "Bronzebeard", "Burning-Blade", "Burning-Legion", "Burning-Steppes", "C'Thun", "Chamber-of-Aspects", "Chants-éternels", "Cho'gall", "Chromaggus", "Colinas-Pardas", "Confrérie-du-Thorium", "Conseil-des-Ombres", "Crushridge", "Culte-de-la-Rive-noire", "Daggerspine", "Dalaran", "Dalvengyr", "Darkmoon-Faire", "Darksorrow", "Darkspear", "Das-Konsortium", "Das-Syndikat", "Deathguard", "Deathweaver", "Deathwing", "Deepholm", "Defias-Brotherhood", "Dentarg", "Der-Mithrilorden", "Der-Rat-von-Dalaran", "Der-abyssische-Rat", "Destromath", "Dethecus", "Die-Aldor", "Die-Arguswacht", "Die-Nachtwache", "Die-Silberne-Hand", "Die-Todeskrallen", "Die-ewige-Wacht", "Doomhammer", "Draenor", "Dragonblight", "Dragonmaw", "Drak'thul", "Drek'Thar", "Dun-Modr", "Dun-Morogh", "Dunemaul", "Durotan", "Earthen-Ring", "Echsenkessel", "Eitrigg", "Eldre'Thalas", "Elune", "Emerald-Dream", "Emeriss", "Eonar", "Eredar", "Eversong", "Executus", "Exodar", "Festung-der-Stürme", "Fordragon", "Forscherliga", "Frostmane", "Frostmourne", "Frostwhisper", "Frostwolf", "Galakrond", "Garona", "Garrosh", "Genjuros", "Ghostlands", "Gilneas", "Goldrinn", "Gordunni", "Gorgonnash", "Greymane", "Grim-Batol", "Grom", "Gul'dan", "Hakkar", "Haomarush", "Hellfire", "Hellscream", "Howling-Fjord", "Hyjal", "Illidan", "Jaedenar", "Kael'thas", "Karazhan", "Kargath", "Kazzak", "Kel'Thuzad", "Khadgar", "Khaz-Modan", "Khaz'goroth", "Kil'jaeden", "Kilrogg", "Kirin-Tor", "Kor'gall", "Krag'jin", "Krasus", "Kul-Tiras", "Kult-der-Verdammten", "La-Croisade-écarlate", "Laughing-Skull", "Les-Clairvoyants", "Les-Sentinelles", "Lich-King", "Lightbringer", "Lightning's-Blade", "Lordaeron", "Los-Errantes", "Lothar", "Madmortem", "Magtheridon", "Mal'Ganis", "Malfurion", "Malorne", "Malygos", "Mannoroth", "Marécage-de-Zangar", "Mazrigos", "Medivh", "Minahonda", "Moonglade", "Mug'thol", "Nagrand", "Nathrezim", "Naxxramas", "Nazjatar", "Nefarian", "Nemesis", "Neptulon", "Ner'zhul", "Nera'thor", "Nethersturm", "Nordrassil", "Norgannon", "Nozdormu", "Onyxia", "Outland", "Perenolde", "Pozzo-dell'Eternità", "Proudmoore", "Quel'Thalas", "Ragnaros", "Rajaxx", "Rashgarroth", "Ravencrest", "Ravenholdt", "Razuvious", "Rexxar", "Runetotem", "Runetotem", "Sargeras", "Saurfang", "Scarshield-Legion", "Sen'jin", "Shadowsong", "Shattered-Halls", "Shattered-Hand", "Shattrath", "Shen'dralar", "Silvermoon", "Sinstralis", "Skullcrusher", "Soulflayer", "Spinebreaker", "Sporeggar", "Steamwheedle-Cartel", "Stormrage", "Stormreaver", "Stormscale", "Sunstrider", "Suramar", "Sylvanas", "Taerar", "Talnivarr", "Tarren-Mill", "Teldrassil", "Temple-noir", "Terenas", "Terokkar", "Terrordar", "The-Maelstrom", "The-Sha'tar", "The-Venture-Co", "Theradras", "Thermaplugg", "Thrall", "Throk'Feroth", "Thunderhorn", "Tichondrius", "Tirion", "Todeswache", "Trollbane", "Turalyon", "Twilight's-Hammer", "Twisting-Nether", "Tyrande", "Uldaman", "Ulduar", "Uldum", "Un'Goro", "Varimathras", "Vashj", "Vek'lor", "Vek'nilash", "Vol'jin", "Wildhammer", "Wrathbringer", "Xavius", "Ysera", "Ysondre", "Zenedar", "Zirkel-des-Cenarius", "Zul'jin", "Zuluhed"],

    "kr": ["Alexstrasza", "Azshara", "Burning-Legion", "Cenarius", "Dalaran", "Deathwing", "Durotan", "Garona", "Gul'dan", "Hellscream", "Hyjal", "Malfurion", "Norgannon", "Rexxar", "Stormrage", "Wildhammer", "Windrunner", "Zul'jin"],

    "tw": ["Arthas", "Arygos", "Bleeding-Hollow", "Chillwind-Point", "Crystalpine-Stinger", "Demon-Fall-Canyon", "Dragonmaw", "Frostmane", "Hellscream", "Icecrown", "Krol-Blade", "Light's-Hope", "Menethil", "Nightsong", "Old-Blanchy", "Order-of-the-Cloud-Serpent", "Quel'dorei", "Shadowmoon", "Silverwing-Hold", "Skywall", "Spirestone", "Stormscale", "Sundown-Marsh", "Whisperwind", "World-Tree", "Wrathbringer", "Zealot-Blade"]
}
  window.onload = function() {
    var regionSel = document.getElementById("submitSection__regions"),
        serverSel = document.getElementById("submitSection__servers");
    for (var x in regionObject) {
      regionSel.options[regionSel.options.length] = new Option(x, x);
    }
    regionSel.onchange = function () {
        serverSel.length = 1;
        if (this.selectededIndex < 1) return;
       var xy = regionObject[this.value];
       for (var y in regionObject[this.value]) {
        serverSel.options[serverSel.options.length] = new Option(xy[y], y);
       }
    }
    regionSel.onchange();
}

