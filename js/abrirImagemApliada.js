function abrirImagemAmpliada(id) {
    var modalImagem = document.getElementById('modalImagem' + id);
    var fundoEscuro = document.getElementById('fundoEscuro' + id);
    var imgAmpliada = document.getElementById('imgAmpliada' + id);
    var imagemClicada = document.getElementsByClassName('bone-img')[id - 1];
    imgAmpliada.src = imagemClicada.src;
    modalImagem.style.display = 'block';
    fundoEscuro.style.display = 'block';
}

function fecharModalImagem(id) {
    var modalImagem = document.getElementById('modalImagem' + id);
    var fundoEscuro = document.getElementById('fundoEscuro' + id);
    modalImagem.style.display = 'none';
    fundoEscuro.style.display = 'none';
}
