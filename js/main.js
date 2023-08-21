import { bloodElfNameOneM, bloodElfNameOneF, bloodElfNameTwo } from "./bloodElf.js";
import { darkironDwarfNameOneM, darkironDwarfNameOneF, darkironDwarfNameTwo } from "./darkironDwarf.js";
import { dracthyrNameOneM, dracthyrNameOneF } from "./dracthyr.js";
import { draeneiNameOneM, draeneiNameOneF, } from "./draenei.js";
import { dwarfNameOneM, dwarfNameOneF, dwarfNameTwo } from "./dwarf.js";
import { gnomeNameOneM, gnomeNameOneF, gnomeNameTwo } from "./gnome.js";
import { goblinNameOneM, goblinNameOneF, goblinNameTwo } from "./goblin.js";
import { highmountainTaurenNameOneM, highmountainTaurenNameOneF, highmountainTaurenNameTwo } from "./highmountainTauren.js";
import { humanNameOneM, humanNameOneF, humanNameTwo } from "./human.js";
import { kulTiranNameOneM, kulTiranNameOneF, kulTiranNameTwo } from "./kulTiran.js";
import { lightforgedDraeneiNameOneM, lightforgedDraeneiNameOneF } from "./lightforgedDraenei.js";
import { magharOrcNameOneM, magharOrcNameOneF, magharOrcNameTwo } from "./mag'harOrc.js";
import { mechagnomeNameOneM, mechagnomeNameOneF, mechagnomeNameTwo } from "./mechagnome.js";
import { nightborneNameOneM, nightborneNameOneF, nightborneNameTwo } from "./nightborne.js";
import { nightElfNameOneM, nightElfNameOneF, nightElfNameTwo } from "./nightElf.js";
import { orcNameOneM, orcNameOneF, orcNameTwo } from "./orc.js";
import { pandarenNameOneM, pandarenNameOneF, pandarenNameTwo } from "./pandaren.js";
import { taurenNameOneM, taurenNameOneF, taurenNameTwo } from "./tauren.js";
import { trollNameOneM, trollNameOneF, trollNameTwo } from "./troll.js";
import { forsakenNameOneM, forsakenNameOneF, forsakenNameTwo } from "./forsaken.js";
import { voidElfNameOneM, voidElfNameOneF, voidElfNameTwo } from "./voidElf.js";
import { vulperaNameOneM, vulperaNameOneF } from "./vulpera.js";
import { worgenNameOneM, worgenNameOneF, worgenNameTwo } from "./worgen.js";
import { zandalariTrollNameOneM, zandalariTrollNameOneF, zandalariTrollNameTwo } from "./zandalariTroll.js";


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

    var raceSelection = document.getElementById("submitSection__races").value;
    var sexSelection = document.querySelector('input[name="gender"]:checked').value
    

    //TODO: ternary statement refactor





   /*  var nameOne =
        sexSelection === "male" && raceSelection === "bloodElf"
        ? raceSelection + "NameOneM"
        : raceSelection + "NameOneF"


    var nameTwo =
        raceSelection === ("dracthyr", "draenei", "lightforgedDraenei", "vulpera")
        ? nameTwo = nameOne
        : raceSelection + "NameTwo"



        console.log(nameOne)
        console.log(nameTwo)
 */
        
        
     

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
        var nameTwo = "" 
     }
    if (raceSelection === "dracthyr" && sexSelection === "female") {
        var nameOne = dracthyrNameOneF;
        var nameTwo = "" 
     }

     if (raceSelection === "draenei" && sexSelection === "male") {
        var nameOne = draeneiNameOneM;
        var nameTwo = "" 
     }
    if (raceSelection === "draenei" && sexSelection === "female") {
        var nameOne = draeneiNameOneF;
        var nameTwo = "" 
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
        var nameTwo = "" 
     }
    if (raceSelection === "lightforgedDraenei" && sexSelection === "female") {
        var nameOne = lightforgedDraeneiNameOneF;
        var nameTwo = "" 
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

     if (raceSelection === "forsaken" && sexSelection === "male") {
        var nameOne = forsakenNameOneM;
        var nameTwo = forsakenNameTwo 
     }
    if (raceSelection === "forsaken" && sexSelection === "female") {
        var nameOne = forsakenNameOneF;
        var nameTwo = forsakenNameTwo 
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
        var nameTwo = "" 
     }
    if (raceSelection === "vulpera" && sexSelection === "female") {
        var nameOne = vulperaNameOneF;
        var nameTwo = "" 
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

     if (nameTwo === "") {
       var nameTwo = nameOne
     }
     
     
    const randomNumberArray1 = [];
    const randomNumberArray2 = [];
    for (let i = 0; i < Object.values(nameOne).length;) {
        const randomNumber1 = Math.floor(Math.random() * Object.values(nameOne).length);
        if (randomNumberArray1.includes(randomNumber1)) continue;
        randomNumberArray1.push(randomNumber1);
        i++;
   
    }
    for ( let i = 0; i < Object.values(nameTwo).length;) {
      const randomNumber2 = Math.floor(Math.random() * Object.values(nameTwo).length);
        if (randomNumberArray2.includes(randomNumber2)) continue;
        randomNumberArray2.push(randomNumber2);
        i++;
    }   

    const suggestion1 = nameOne[randomNumberArray1[3]] 
    
    const suggestion2 = nameOne[randomNumberArray1[2]] 
    
    const suggestion3 = nameOne[randomNumberArray1[1]] 
    
    const suggestion4 = nameOne[randomNumberArray1[0]]

    const suggestion5 = nameTwo[randomNumberArray2[1]] 

    const suggestion6 = nameTwo[randomNumberArray2[3]] 

    const suggestion7 = nameTwo[randomNumberArray2[0]] 

    const suggestion8 = nameTwo[randomNumberArray2[1]] 

    const suggestion9 = nameTwo[randomNumberArray2[1]] 

    const suggestion10 = nameTwo[randomNumberArray2[0]] 


    const regex =  /\w+/g;
    const suggestionOne = suggestion1.match(regex).join('')
    const suggestionTwo = suggestion2.match(regex).join('')
    const suggestionThree = suggestion3.match(regex).join('')
    const suggestionFour = suggestion4.match(regex).join('')
    const suggestionFive = suggestion5.match(regex).join('')
    const suggestionSix = suggestion6.match(regex).join('')
    const suggestionSeven = suggestion7.match(regex).join('')
    const suggestionEight = suggestion8.match(regex).join('')

    var roll5 = suggestion9.match(regex).join('')
    var roll6 = suggestion10.match(regex).join('')

    var roll1 = suggestionOne + suggestionFive
    var roll2 = suggestionTwo + suggestionSix
    var roll3 = suggestionThree + suggestionSeven
    var roll4 = suggestionFour + suggestionEight

   
    if (document.querySelector('input[name="checkbox"]').checked === true) {

        if (roll1.length > 12) {
            var roll1 = suggestionOne
        }
        if (roll2.length > 12) {
            var roll2 = suggestionTwo
        }
        if (roll3.length > 12) {
            var roll3 = suggestionThree
        }
        if (roll4.length > 12) {
            var roll4 = suggestionFour
        }
        if (roll5.length > 12) {
            var roll5 = suggestionFive
        }
        if (roll6.length > 12) {
            var roll6 = suggestionSix
        }
    }

    return [roll1, roll2, roll3, roll4, roll5, roll6]
}




const displayNames = (namesArray) => {
    const list = document.querySelector('.suggestionSection ol');
    const region = document.getElementById("submitSection__regions").value;
    const server = regionObject[region][document.getElementById("submitSection__servers").value];

    namesArray.forEach(name => {
        list.innerHTML += `<ul><a>${name}</a> 
        </ul>`;
    });

    const display = document.getElementById("suggestionSection");
    if (display.classList.contains("hidden")) display.classList.toggle("hidden");

    document.getElementById('rolls').addEventListener('click', check);
    function check(event) {
        
        var selection = event.target.textContent

        let url = `'https://cors-anywhere.herokuapp.com/https://worldofwarcraft.blizzard.com/en-us/character/${region}/${server}/${selection}`;
        function urlExists(url, callback) {
        fetch(url, { method: 'head' })
        .then(function(status) {
        callback(status.ok)
        });
        }
        urlExists(url, function(exists) {
        if (exists) {
        alert(`${selection} is available on ${server}!`)
        } else {
        alert(`${selection} is taken on ${server}.`)
        }
        
        });

        
        }  

        /* document.getElementById('button').addEventListener('reset', checked);
        function checked() {
            
        } */
       
}



//todo reset check() on roll name selection





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

