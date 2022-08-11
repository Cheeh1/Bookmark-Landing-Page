'use strict'

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
   modal.classList.add('hidden');
   overlay.classList.add('hidden');
};

const openModal = function () {
   modal.classList.remove('hidden');
   overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

  btnCloseModal.addEventListener('click', closeModal);
  

  //for the Esc key
  document.addEventListener('keydown', function (e) {
   if (e.key === 'Escape' && !modal.classList.contains ('hidden')) {
       closeModal();
   }
  }); 


  //Frequently Asked Question
var question1 = document.getElementById("btn");
var answer1 = document.getElementById("txt");
var icon1 = document.getElementById("icon");
question1.addEventListener("click", function () {
  answer1.classList.toggle("visible");
  icon1.classList.toggle("rotate");
});

var question2 = document.getElementById("btn02");
var answer2 = document.getElementById("txt02");
var icon2 = document.getElementById("icon02");
question2.addEventListener("click", function () {
  answer2.classList.toggle("visible");
  icon2.classList.toggle("rotate");
});

var question3 = document.getElementById("btn03");
var answer3 = document.getElementById("txt03");
var icon3 = document.getElementById("icon03");
question3.addEventListener("click", function () {
  answer3.classList.toggle("visible");
  icon3.classList.toggle("rotate");
});

var question4 = document.getElementById("btn04");
var answer4 = document.getElementById("txt04");
var icon4 = document.getElementById("icon04");
question4.addEventListener("click", function () {
  answer4.classList.toggle("visible");
  icon4.classList.toggle("rotate");
});