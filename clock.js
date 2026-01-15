
const startingAgeYears = 13.801632026 * 1_000_000_000;

const pageLoad = Date.now() / 1000;


function getUniverseTime() {
    const date = new Date();
    const now = Date.now() / 1000;

    const liveSeconds = now - pageLoad;

    const liveYears = liveSeconds / (365.25 * 24 * 60 * 60);

    const totalYears = startingAgeYears + liveYears;

    const seconds = date.getUTCSeconds();
    const minutes = date.getUTCMinutes(); 
    const hours = date.getUTCHours();

    const startOfYear = new Date(date.getUTCFullYear(), 0, 1);
    const days = Math.floor((date - startOfYear) / 86400000 + 1);

    const years = Math.floor(totalYears % 10); 
    const decades = Math.floor((totalYears / 10) % 10); 
    const centuries = Math.floor((totalYears / 100) % 10); 
    const millennia = Math.floor((totalYears / 1000) % 10); 
    const decamillennia = Math.floor((totalYears / 10000) % 100); 
    const megaannum = Math.floor((totalYears / 1_000_000) % 1000); 
    const gigaannum = Math.floor(totalYears / 1_000_000_000); 

    return [ gigaannum, megaannum, decamillennia, millennia, centuries, decades, years, days, hours, minutes, seconds ];
}

function updateClock() {
    const values = getUniverseTime();

    const formatted = values.map(v => String(v).padStart(2, "0")).join(":");

    document.getElementById("clock").textContent = formatted;
}

setInterval(updateClock, 100);
updateClock();