function scrollSobreMim(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

function scrollMinhasExperiencias(){
    const minhasExperiencias = document.getElementById("minhas-experiencias");
    minhasExperiencias.scrollIntoView({ behavior: "smooth" });
}

function scrollMeusProjetos(){
    const minhasExperiencias = document.getElementById("meus-projetos");
    minhasExperiencias.scrollIntoView({ behavior: "smooth" });
}

function scrollContatos(){
    const minhasExperiencias = document.getElementById("contatos");
    minhasExperiencias.scrollIntoView({ behavior: "smooth" });
}
