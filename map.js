let map;
const hotspots = [
  { name:"Tysons Mall", lat:38.924, lng:-77.221, concept:"Event-Driven Architecture", desc:"Click stores → animated arrows show event flow", miniGame:"events" },
  { name:"UVA", lat:38.033, lng:-78.507, concept:"Dependency Injection", desc:"Drag modules into services to build dependency graph", miniGame:"dragModules" },
  { name:"Richmond Library", lat:37.540, lng:-77.436, concept:"Recursion & Call Stack", desc:"Nested calls visualized", miniGame:"recursion" },
  { name:"Shenandoah Park", lat:38.53, lng:-78.35, concept:"Concurrency", desc:"Coordinate multiple threads", miniGame:"concurrency" },
  { name:"Fairfax School", lat:38.846, lng:-77.306, concept:"Loops / Iteration", desc:"Repeated tasks visually represented", miniGame:"loops" },
  { name:"Alexandria Grocery", lat:38.804, lng:-77.046, concept:"Variables / State", desc:"Store items = variables", miniGame:"variables" }
];

function initMap() {
    map = L.map('map').setView([37.5, -78.5], 7);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        maxZoom:19, attribution:'&copy; OpenStreetMap contributors'
    }).addTo(map);

    hotspots.forEach(loc => {
        const marker = L.circleMarker([loc.lat, loc.lng], { radius:14, color:'#0ff', fillColor:'#0ff', fillOpacity:0.6, weight:3 }).addTo(map);
        marker.bindTooltip(loc.concept,{permanent:false, direction:"top", offset:[0,-10]});
        marker.getElement().style.cursor='pointer';
        marker.on('click',()=>window.app.openModal(loc));
    });
}