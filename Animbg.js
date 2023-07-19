class Animbg {
  constructor(selector) {
    this.elements = document.querySelectorAll(".anim-bg");
  }
  listenCursorMove(event) {
    const { clientX, clientY } = event;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const posX = clientX - centerX;
    const posY = clientY - centerY;

    this.elements.forEach((el) => this.moveElement(el, posX, posY));
  }
  moveElement(element, posX, posY) {
    const ratioX = -element.getAttribute("ratioX");
    const ratioY = -element.getAttribute("ratioY");

    element.style.transform = `translate(${posX * ratioX}px, ${
      posY * ratioY
    }px)`;
  }
}
