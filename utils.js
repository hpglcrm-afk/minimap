// Helper to create arrows between two elements
function createArrow(from, to) {
    const rect1 = from.getBoundingClientRect();
    const rect2 = to.getBoundingClientRect();
    const arrow = document.createElement('div');
    arrow.classList.add('arrow');
    document.body.appendChild(arrow);

    const x1 = rect1.left + rect1.width/2;
    const y1 = rect1.top + rect1.height/2;
    const x2 = rect2.left + rect2.width/2;
    const y2 = rect2.top + rect2.height/2;
    const dx = x2-x1, dy = y2-y1;
    const length = Math.sqrt(dx*dx + dy*dy);
    const angle = Math.atan2(dy,dx)*180/Math.PI;
    arrow.style.width = length + "px";
    arrow.style.left = x1 + "px";
    arrow.style.top = y1 + "px";
    arrow.style.transform = `rotate(${angle}deg)`;
    arrow.dataset.from = from.textContent;
    arrow.dataset.to = to.textContent;
}

// Remove arrow
function removeArrow(from, to) {
    document.querySelectorAll('.arrow').forEach(a => {
        if(a.dataset.from===from.textContent && a.dataset.to===to.textContent) a.remove();
    });
}