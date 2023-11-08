function exibirDescricao(idDescricao) {
    var descricao = document.getElementById(idDescricao);
    if (descricao.style.display === "none") {
        descricao.style.display = "block";
    } else {
        descricao.style.display = "none";
    }
}