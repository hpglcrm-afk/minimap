const startBtn = document.getElementById('enterBtn');
const startScreen = document.getElementById('startScreen');
const mapDiv = document.getElementById('map');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const gameArea = document.getElementById('gameArea');
const closeBtn = document.getElementById('closeBtn');

startBtn.addEventListener('click', ()=>{
    startScreen.style.display='none';
    mapDiv.style.display='block';
    initMap();
});

// Expose globally to be called from map.js
window.app = {
    openModal: function(loc){
        modal.style.display='flex';
        modalTitle.textContent = loc.concept + " @ " + loc.name;
        modalDesc.textContent = loc.desc;
        gameArea.innerHTML = "";
        // Call corresponding concept mini-game
        switch(loc.miniGame){
            case "events": eventsMiniGame(gameArea); break;
            case "dragModules": dragModulesGame(gameArea); break;
            case "recursion": recursionGame(gameArea); break;
            case "concurrency": concurrencyGame(gameArea); break;
            case "loops": loopsGame(gameArea); break;
            case "variables": variablesGame(gameArea); break;
        }
    }
}

closeBtn.addEventListener('click', ()=>{ modal.style.display='none'; });