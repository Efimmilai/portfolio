const modalButtons = document.querySelectorAll('.open-modal');
const modals = document.querySelectorAll('.modal');

modalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.dataset.modal;
    const modal = document.getElementById(modalId);

    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });
});

modals.forEach(modal => {
  const overlay = modal.querySelector('.modal-overlay');
  const close = modal.querySelector('.modal-close');

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  overlay.addEventListener('click', closeModal);
  close.addEventListener('click', closeModal);
});
