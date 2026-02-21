function recursionGame(container){
    for(let i=0;i<4;i++){
        const call = document.createElement('div');
        call.classList.add('call');
        call.textContent="Call"+(i+1);
        call.addEventListener('click', ()=>{
            call.classList.add('active');
            setTimeout(()=>call.classList.remove('active'),700);
        });
        container.appendChild(call);
    }
}