(() => {
  const refs = {
    openModalBtn: document.querySelector("[search-window-open]"),
    closeModalBtn: document.querySelectorAll("[search-window-close]"),
    modal: document.querySelector("[data-search-window]"),
    body: document.body,
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  
  refs.closeModalBtn.forEach(btn => {
    btn.addEventListener("click", event => {
      event.preventDefault();
      toggleModal();
    });
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
    refs.body.classList.toggle("scroll-lock");
  }
  })();