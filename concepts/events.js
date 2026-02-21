function eventsMiniGame(container){
    const nodes = [];
    for(let i=0;i<5;i++){
        const node = document.createElement('div');
        node.classList.add('node');
        node.textContent="Store"+(i+1);
        node.addEventListener('click', ()=>{
            node.classList.add('active');
            nodes.forEach(n=>{
                if(n!==node){
                    createArrow(node,n);
                    n.classList.add('active');
                    setTimeout(()=>{n.classList.remove('active'); removeArrow(node,n)},500);
                }
            });
            setTimeout(()=>node.classList.remove('active'),500);
        });
        container.appendChild(node);
        nodes.push(node);
    }
}