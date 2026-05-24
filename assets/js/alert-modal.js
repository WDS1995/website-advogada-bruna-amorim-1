/* global sessionStorage */
(function () {
    'use strict';

    // Exibe apenas uma vez por sessão de navegação
    if (sessionStorage.getItem('alertScamShown')) return;

    var overlay = document.getElementById('alertScamModal');
    if (!overlay) return;

    var btnClose  = document.getElementById('alertScamClose');
    var btnDismiss = document.getElementById('alertScamBtn');

    function closeModal() {
        overlay.classList.remove('is-visible');
        sessionStorage.setItem('alertScamShown', '1');
    }

    // Abre após 3 segundos
    setTimeout(function () {
        overlay.classList.add('is-visible');
    }, 3000);

    // Botão ×
    if (btnClose) btnClose.addEventListener('click', closeModal);
    // Botão "Entendi"
    if (btnDismiss) btnDismiss.addEventListener('click', closeModal);

    // Clique fora do card fecha o modal
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closeModal();
    });

    // Tecla Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeModal();
    });
}());
