// Show modal
function showModal(title, desc){
    const modal = document.getElementById('modal');
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDesc').textContent = desc;
    modal.style.display='flex';
}

// Hide modal
function hideModal(){
    document.getElementById('modal').style.display='none';
}

// View More example (can link to external page or expand inline)
function viewMore(title){
    alert(title + " - Detailed explanation coming soon!"); 
    // Can be replaced with dynamic content
}

// Close modal on clicking outside
window.addEventListener('click', e=>{
    const modal = document.getElementById('modal');
    if(e.target === modal){
        modal.style.display='none';
    }
});
