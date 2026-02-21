const startBtn = document.getElementById('startBtn');
const startScreen = document.getElementById('startScreen');
const mapDiv = document.getElementById('map');

// Start button click
startBtn.addEventListener('click', ()=>{
    startScreen.style.display='none';
    mapDiv.style.display='block';
    initMap();
});

// Map initialization
function initMap(){
    const map = L.map('map').setView([37.5, -78.5], 7);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        maxZoom:19, attribution:'&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Add all hotspots
    hotspots.forEach(loc=>{
        const marker = L.circleMarker([loc.lat, loc.lng], {
            radius:8, color:'#0ff', fillColor:'#0ff', fillOpacity:0.6, weight:2
        }).addTo(map);
        marker.bindTooltip(loc.concept,{permanent:false, direction:"top", offset:[0,-10]});
        marker.getElement().style.cursor='pointer';
        marker.on('click', ()=> showModal(loc.concept, loc.desc));
    });
}
