(() => {
  const refs = {
    headerBtn: document.querySelector('[data-header-btn]'),

    openModalBtn: document.querySelector('[data-modal-btm-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('body'),
  };


  refs.headerBtn.addEventListener('click', toggleModal);
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);


  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
