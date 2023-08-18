// Para adicionar animações com JavaScript, você pode usar a biblioteca TweenMax ou outras bibliotecas similares.
// Neste exemplo, usaremos animações simples de CSS.

const socialButtons = document.querySelectorAll('.icone-instagram, .icone-whatsapp, .icone-facebook');

socialButtons.forEach((button) => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'translateY(-5px)';
        button.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = 'none';
    });
});
