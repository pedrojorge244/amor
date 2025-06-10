function mostrarMensagem() {
const msg = document.getElementById('mensagem');
msg.classList.remove('hidden');

// Criar corações
for (let i = 0; i < 30; i++) {
criarCoracao();
}
}

function criarCoracao() {
const coracao = document.createElement('div');
coracao.classList.add('coracao');
coracao.style.left = Math.random() * 100 + "vw";
coracao.style.animationDuration = (Math.random() * 2 + 3) + "s";
document.body.appendChild(coracao);

setTimeout(() => {
coracao.remove();
}, 5000);
}