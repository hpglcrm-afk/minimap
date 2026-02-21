function variablesGame(container){
    for(let i=0;i<5;i++){
        const variable = document.createElement('div');
        variable.classList.add('variable');
        variable.textContent="Var"+(i+1);
        variable.addEventListener('click', ()=> variable.classList.toggle('active'));
        container.appendChild(variable);
    }
}