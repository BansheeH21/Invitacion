function abrirSobre() {
    const wrapper = document.querySelector('.envelope-wrapper');
    wrapper.classList.add('open');

    // Redirección elegante tras la animación
    setTimeout(() => {
        window.location.href = 'carta.html';
    }, 1200);
}

// Opcional: Podrías añadir un efecto de sonido de papel aquí