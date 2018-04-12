//black coffee
var modalBlack = document.querySelector(".modalBlack");
var triggerBlack = document.querySelector(".triggerBlack");
var closeBlack = document.querySelector("#closeBlack");

//espresso
var modalEspresso = document.querySelector(".modalEspresso");
var triggerEspresso = document.querySelector(".triggerEspresso");
var closeEspresso = document.querySelector("#closeEspresso");

//double espresso
var modalDouble = document.querySelector(".modalDouble");
var triggerDouble = document.querySelector(".triggerDouble");
var closeDouble = document.querySelector("#closeDouble");

//cappuccino
var modalCapp = document.querySelector(".modalCapp");
var triggerCapp = document.querySelector(".triggerCapp");
var closeCapp = document.querySelector("#closeCapp");

//latte
var modalLatte = document.querySelector(".modalLatte");
var triggerLatte = document.querySelector(".triggerLatte");
var closeLatte = document.querySelector("#closeLatte");

//mocha
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

//trigger buttons for black coffee
triggerBlack.addEventListener("click", toggleModal.black);
closeBlack.addEventListener("click", toggleModal.black);

//trigger buttons for espresso
triggerEspresso.addEventListener("click", toggleModal.espresso);
closeEspresso.addEventListener("click", toggleModal.espresso);

//trigger buttons for double espresso
triggerDouble.addEventListener("click", toggleModal.double);
closeDouble.addEventListener("click", toggleModal.double);

//trigger buttons for cappuccino
triggerCapp.addEventListener("click", toggleModal.capp);
closeCapp.addEventListener("click", toggleModal.capp);

//trigger buttons for latte
triggerLatte.addEventListener("click", toggleModal.latte);
closeLatte.addEventListener("click", toggleModal.latte);

//trigger buttons for mocha
triggerMocha.addEventListener("click", toggleModal.mocha);
closeMocha.addEventListener("click", toggleModal.mocha);
