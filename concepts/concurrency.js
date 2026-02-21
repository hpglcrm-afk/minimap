function concurrencyGame(container){
    for(let i=0;i<5;i++){
        const thread = document.createElement('div');
        thread.classList.add('thread');
        thread.textContent="T"+(i+1);
        thread.addEventListener('click', ()=>{
            thread.classList.add('active');
            setTimeout(()=>thread.classList.remove('active'),400);
        });
        container.appendChild(thread);
    }
}