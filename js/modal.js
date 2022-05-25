(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    backdrop: document.querySelector('.backdrop'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.backdrop.addEventListener('click', onBackdropClick);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');

    if (document.body.classList.contains('modal-open')) {
      window.addEventListener('keydown', onEscKeyPress);
    } else {
      window.removeEventListener('keydown', onEscKeyPress);
    }
  }

  function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  }

  function onEscKeyPress(event) {
    if (event.code === 'Escape') {
      toggleModal();
    }
  }
})();
