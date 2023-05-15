
const botoes = document.querySelectorAll("[data-item]");
botoes.forEach((elemento)=>{
    elemento.addEventListener("click", (evento)=> {
        atualizaItem(evento.target.textContent, (evento.target.parentNode));
    })
});

// subtrair.addEventListener("click", (evento)=> {
    
    //     agua.value = parseInt(agua.value) - 1;
    // })
    
    // somar.addEventListener("click", (evento)=> {
        
        //     agua.value = parseInt(agua.value) + 1;
        // })
        
function atualizaItem(acao, inputQtde)
{
    const item = inputQtde.querySelector("[data-qtde]");
    if (acao==="-")
    {
        item.value = parseInt(item.value) - 1;
    }
    else
    {
        item.value = parseInt(item.value) + 1;
    }
}