// Utils for modal
function showModal(title, desc, link){
    const modal = document.getElementById('modal');
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDesc').textContent = desc;
    const viewMore = document.getElementById('viewMore');
    if(link){ viewMore.href = link; viewMore.style.display='inline-block'; }
    else{ viewMore.style.display='none'; }
    modal.style.display='flex';
}

function hideModal(){
    document.getElementById('modal').style.display='none';
}
