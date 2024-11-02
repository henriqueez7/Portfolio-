
function ativaletra(elemento){
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrTexto.forEach((letra, i)=>{
        setTimeout(()=>{
            elemento.innerHTML += letra; 
        }, 150 * i);
    })
}

const titulo = document.querySelector('.subtitulo');
ativaletra(titulo);