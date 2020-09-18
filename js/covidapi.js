const url = "https://api.covid19api.com/summary";
const globalNewCase = document.getElementById("worldNewCase");
const globalTotalConfirmed = document.getElementById("worldCase");
const globalTotalDeaths = document.getElementById("worldDeath");
const globalNewRecovered = document.getElementById("worldNewRecovery");
const globalTotalRecovered = document.getElementById("worldRecovery");
const globalNewDeaths = document.getElementById("worldNewDeath");

const nepalTotalConfirmed = document.getElementById("nepalCase");
const nepalTotalDeaths = document.getElementById("nepalDeath");
const nepalNewRecovered = document.getElementById("nepalNewRecovery");
const nepalTotalRecovered = document.getElementById("nepalRecovery");
const nepalNewCase = document.getElementById("nepalNewCase");
const nepalNewDeaths = document.getElementById("nepalNewDeath");

function worldCovidApi() {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const global = data["Global"];
            // const nepal = data["Countries"].map((country) => countries.Nepal);
            console.log(nepal);
            globalNewCase.innerText = `+ ${global.NewConfirmed}`;
            globalTotalConfirmed.innerText = global.TotalConfirmed;
            globalTotalDeaths.innerText = global.TotalDeaths;
            globalNewDeaths.innerText = `+ ${global.NewDeaths}`;
            globalNewRecovered.innerText = `+ ${global.NewRecovered}`;
            globalTotalRecovered.innerText = global.TotalRecovered;

            nepalNewCase.innerText = `+ ${nepal.NewConfirmed}`;
            nepalTotalConfirmed.innerText = nepal.TotalConfirmed;
            nepalTotalDeaths.innerText = nepal.TotalDeaths;
            nepalNewDeaths.innerText = `+ ${nepal.NewDeaths}`;
            nepalNewRecovered.innerText = `+ ${nepal.NewRecovered}`;
            nepalTotalRecovered.innerText = nepal.TotalRecovered;
        });
}
worldCovidApi();
