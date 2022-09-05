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

//Dark mode but doesnt toggle (Alternative but not the best)
/*const darkBtn = document.querySelector('.dark-mode');

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
});*/

// Dark mode toggle button and better
const toggleBtn = document.querySelector('.dark-mode');

toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-theme');
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


// Animation using GSAP.js

  // Header Animatiom
  gsap.from(".intro-header", {scrollTrigger: ".intro", y:-200, duration: 1});
  gsap.from(".scnd-nav", {scrollTrigger: ".intro", y:-50, duration: 1});

  // Intro
  gsap.from(".intro-paragraph", {scrollTrigger: ".intro",x:-150, duration: 1});
  gsap.from(".intro-button", {scrollTrigger: ".intro", y:50, duration: 1});
  gsap.from(".intro-img", {scrollTrigger: ".intro", x:200, duration: 2});
  gsap.from(".hide-1", {scrollTrigger: "nav", y:-50, duration: 1});

  // Nxt
  gsap.from(".nxt-header", {scrollTrigger: ".nxt-header", y:-150, duration: 1});
  gsap.from(".nxt-paragraph", {scrollTrigger: ".nxt-paragraph", y:-150, duration: 1});

  // Select
  gsap.from(".select", {scrollTrigger: ".link", y:-100, duration: 1});
  gsap.from(".line-2", {scrollTrigger: ".link", y:50, duration: 1});

  // Btn
  gsap.from(".btn-img", {scrollTrigger: ".btn", x:-250, duration: 2});
  gsap.from(".btn-2-header", {scrollTrigger: ".btn-2-header", y:100, duration: 1});
  gsap.from(".btn-2-paragraph", {scrollTrigger: ".btn-2-paragraph", y:100, duration: 1});
  gsap.from(".btn-button", {scrollTrigger: ".btn-2-paragraph", y:100, duration: 1});

  // Ext
  gsap.from(".ext-header", {scrollTrigger: ".ext", y:-150, duration: 1});
  gsap.from(".ext-paragraph", {scrollTrigger: ".ext", y:150, duration: 1});
 
  // BOX
gsap.from(".box-1", {scrollTrigger: ".box-1", y:200, duration: 1})
gsap.from(".box-2", {scrollTrigger: ".box-2", y:200, duration: 1})
gsap.from(".box-3", {scrollTrigger: ".box-3", y:200, duration: 1})

  // Bgd
gsap.from(".bgd-header", {scrollTrigger: ".bgd", y:-100, duration: 1})
gsap.from(".bgd-paragraph", {scrollTrigger: ".bgd", y:100, duration: 1})

  // Bkm
gsap.from(".bkm-break-1, .bkm-break-2, .bkm-break-3, .bkm-break-4, .bkm-break-5", {scrollTrigger: ".bkm", y:100, duration: 1})
gsap.from(".bkm-flex", {scrollTrigger: ".bkm-flex", y:-100, duration: 2})
gsap.from(".bgd-button", {scrollTrigger: ".bgd-button", y:150, duration: 1})

  // Ftr
gsap.from(".ftr", {scrollTrigger: ".ftr", y:200, duration: 1})
gsap.from(".ftr-paragraph", {scrollTrigger: ".ftr", y:-100, duration: 1})
gsap.from(".ftr-header", {scrollTrigger: ".ftr", y:-100, duration: 1})
gsap.from(".ftr-input", {scrollTrigger: ".ftr", y:150, duration: 1})
gsap.from(".ftr-button", {scrollTrigger: ".ftr-i", y:150, duration: 2})

  // Ftr-2
  gsap.from(".ftr-2", {scrollTrigger: ".ftr", y:100, duration: 1})
  gsap.from(".ftr-2-logo", {scrollTrigger: ".ftr", x:-500, duration: 2})
  gsap.from(".ftr-2-nav", {scrollTrigger: ".ftr", y:200, duration: 2})
  gsap.from(".ftr-2-flex", {scrollTrigger: ".ftr", x:500, duration: 2})