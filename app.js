document.addEventListener('DOMContentLoaded', () => {
    let valorScroll = 0;
    window.addEventListener('wheel', (event) => {

        const direcaoScroll = event.deltaY; // Coleta valores do scroll
        if (direcaoScroll > 0) {  // O scroll está indo para baixo
            if(valorScroll < 2){
                valorScroll++;
            }
        } 
        else if (direcaoScroll < 0) { // O scroll está indo para cima
            if(valorScroll > 0){
                valorScroll--;
            }
        }

        switch (valorScroll) {
            case 0:
                scrollSobreMim();
                console.log("Sobre mim");
                break;
            case 1:
                scrollMinhasExperiencias();
                console.log("Minhas experiências");
                break;
            case 2:
                scrollContatos();
                console.log("Contatos");
                break;
            default:
                break;
        }
    });
});

function scrollSobreMim(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

function scrollMinhasExperiencias(){
    const minhasExperiencias = document.getElementById("minhas-experiencias");
    minhasExperiencias.scrollIntoView({ behavior: "smooth"});
}

function scrollContatos(){
    const contato = document.getElementById("contatos");
    contato.scrollIntoView({ behavior: "smooth"});
}
