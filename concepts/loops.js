function loopsGame(container){
    for(let i=0;i<6;i++){
        const loop = document.createElement('div');
        loop.classList.add('loop');
        loop.textContent="Loop"+(i+1);
        loop.addEventListener('click', ()=> loop.classList.toggle('active'));
        container.appendChild(loop);
    }
}