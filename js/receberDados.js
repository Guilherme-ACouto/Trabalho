const urlParams = new URLSearchParams(window.location.search);
const nome = urlParams.get('nome');
const email = urlParams.get('email');
const mensagem = urlParams.get('mensagem');

console.log('Nome:', nome);
console.log('E-mail:', email);
console.log('Mensagem:', mensagem);

// Aqui você pode processar os dados conforme necessário
