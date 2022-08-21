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
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);

//for the Esc key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
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


//TAB VIEW
const btns = document.querySelectorAll('.link');

btns.forEach(function (btn) {
   btn.addEventListener('click', function (e) {
      const style = e.currentTarget.classList;
      const firstTab = document.querySelector('.frst-tab');
      const secondTab =  document.querySelector('.scnd-tab');
      const thirdTab = document.querySelector('.third-tab');

      if (style.contains('scndLink')) {
         firstTab.classList.add('active');
         secondTab.classList.remove('active');
         thirdTab.classList.add('active'); 
      } else if (style.contains('thirdLink')) {
         firstTab.classList.add('active');
         secondTab.classList.add('active');
         thirdTab.classList.remove('active');  
      } else {
         firstTab.classList.remove('active');
         secondTab.classList.add('active');
         thirdTab.classList.add('active');  
      }
   });
});

//Dark mode
const darkBtn = document.querySelector('.dark-mode');

darkBtn.addEventListener("click", function () {
  const body = document.getElementById("body");
  body.style.backgroundColor = "#121212";

  const header = document.querySelectorAll("#head");
  header.forEach(function (head) {
    head.style.color = "rgb(56, 77, 170)";
  });

  const paragraph = document.querySelectorAll("#text");
  paragraph.forEach(function (text) {
    text.style.color = "#fff";
  });

  const lines = document.querySelectorAll("#line");
  lines.forEach(function (line) {
    line.style.border = "1px solid rgb(53, 51, 51)";
  });

  const lineNavs = document.querySelectorAll("#line-mobile");
  lineNavs.forEach(function (lineNav) {
    lineNav.style.border = "1px solid rgb(217, 235, 235)";
  });

  const boxShadow = document.querySelectorAll("#box-shadow");
  boxShadow.forEach(function (shadow) {
    shadow.style.boxShadow = "10px 10px 30px black, -10px -10px 30px black";
    shadow.style.backgroundColor = "white";
  });

  const boxParagraph = document.querySelectorAll(".box-paragraph");
  boxParagraph.forEach(function (text) {
    text.style.color = "#000";
  });

  const bkmHeader = document.querySelectorAll(".bkm-header");
  bkmHeader.forEach(function (head) {
    head.style.color = "rgb(56, 77, 170)";
  });

  const bkmText = document.querySelectorAll(".bkm-text");
  bkmText.forEach(function (text) {
    text.style.color = "#fff";
  });

  const menuBtn = document.querySelectorAll(".show-modal");
  menuBtn.forEach(function (btn) {
    btn.style.backgroundColor = "#fff";
  });
});

   
// Email Verification
const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', function () {
   const text = document.getElementById('username');
   const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   const showError = document.querySelector('.error');

   if (text.value.match(mailformat)) {
      showError.classList.add('error-view');
      showError.textContent = "Email confirmed.";
      showError.style.backgroundColor = "green";
      document.form1.text1.focus();
      return true;
   } else {
      showError.classList.add('error-view');
      document.form1.text1.focus();
      return false;
   }
});