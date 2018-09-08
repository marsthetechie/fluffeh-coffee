// Black coffee
var modalBlack = document.querySelector(".modalBlack");
var triggerBlack = document.querySelector(".triggerBlack");
var closeBlack = document.querySelector("#closeBlack");

// Espresso
var modalEspresso = document.querySelector(".modalEspresso");
var triggerEspresso = document.querySelector(".triggerEspresso");
var closeEspresso = document.querySelector("#closeEspresso");

// Double espresso
var modalDouble = document.querySelector(".modalDouble");
var triggerDouble = document.querySelector(".triggerDouble");
var closeDouble = document.querySelector("#closeDouble");

// Cappuccino
var modalCapp = document.querySelector(".modalCapp");
var triggerCapp = document.querySelector(".triggerCapp");
var closeCapp = document.querySelector("#closeCapp");

// Latte
var modalLatte = document.querySelector(".modalLatte");
var triggerLatte = document.querySelector(".triggerLatte");
var closeLatte = document.querySelector("#closeLatte");

// Mocha
var modalMocha = document.querySelector(".modalMocha");
var triggerMocha = document.querySelector(".triggerMocha");
var closeMocha = document.querySelector("#closeMocha");

var toggleModal = {
  black: function () {
    modalBlack.classList.toggle("show-modal");
  },
  espresso: function () {
    modalEspresso.classList.toggle("show-modal");
  },
  double: function () {
    modalDouble.classList.toggle("show-modal");
  },
  capp: function () {
    modalCapp.classList.toggle("show-modal");
  },
  latte: function () {
    modalLatte.classList.toggle("show-modal");
  },
  mocha: function () {
    modalMocha.classList.toggle("show-modal");
  }
};

// Trigger buttons for black coffee
triggerBlack.addEventListener("click", toggleModal.black);
closeBlack.addEventListener("click", toggleModal.black);

// Trigger buttons for espresso
triggerEspresso.addEventListener("click", toggleModal.espresso);
closeEspresso.addEventListener("click", toggleModal.espresso);

// Trigger buttons for double espresso
triggerDouble.addEventListener("click", toggleModal.double);
closeDouble.addEventListener("click", toggleModal.double);

// Trigger buttons for cappuccino
triggerCapp.addEventListener("click", toggleModal.capp);
closeCapp.addEventListener("click", toggleModal.capp);

// Trigger buttons for latte
triggerLatte.addEventListener("click", toggleModal.latte);
closeLatte.addEventListener("click", toggleModal.latte);

// Trigger buttons for mocha
triggerMocha.addEventListener("click", toggleModal.mocha);
closeMocha.addEventListener("click", toggleModal.mocha);
