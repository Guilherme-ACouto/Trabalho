document.addEventListener("DOMContentLoaded", function() {
    // Selecione o modal e o botão de fechar
    var modal = document.getElementById("cupomModal");
    var closeBtn = modal.querySelector(".close");

    // Exibir o modal após 3 segundos
    setTimeout(function() {
        modal.style.display = "block";
    }, 3000);

    // Fechar o modal quando clicar no botão de fechar (X)
    closeBtn.onclick = function() {
        modal.style.display = "none";
    };
});
