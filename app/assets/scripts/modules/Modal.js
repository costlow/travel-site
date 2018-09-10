import $ from 'jquery';

class Modal {
  constructor() {
    this.modalLink = $('.open-modal');
    this.modal = $('.modal');
    this.modalCloseButton = $('.modal__close');
    this.events();
  }

  events() {
    // Modal Link clicked
    this.modalLink.click(this.openModal.bind(this));
    //Modal close button clicked
    //uses presses ESC
    this.modalCloseButton.click(this.closeModal.bind(this));
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeModal();
    }
  }
  openModal() {
    this.modal.addClass("modal--is-visible");
    return false;
  }

  closeModal() {
    this.modal.removeClass("modal--is-visible");
    return false;
  }
}

export default Modal;
