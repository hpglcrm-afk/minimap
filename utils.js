// Show modal
function showModal(title, desc){
    const modal = document.getElementById('modal');
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDesc').textContent = desc;
    modal.style.display='flex';
}

// Hide modal when clicking outside
window.addEventListener('click', e=>{
    const modal = document.getElementById('modal');
    if(e.target === modal){
        modal.style.display='none';
    }
});
