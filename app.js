"use strict";

//declaring variables

let btn = document.querySelector(".btn");
let headingOne = document.querySelector(".heading-1");
let footerInner = document.querySelector(".inner-footer");

let randomNumber1 = Math.ceil(Math.random() * 6);
let randomDiceImg1 = "d" + randomNumber1 + ".jpg";
let randomDiceImgSrc1 = "Assets/" + randomDiceImg1;

let img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomDiceImgSrc1);

//player 2

// let btn = document.querySelector(".btn");
let randomNumber2 = Math.ceil(Math.random() * 6);

let randomDiceImg2 = "d" + randomNumber2 + ".jpg";
let randomDiceImgSrc2 = "Assets/" + randomDiceImg2;

let img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomDiceImgSrc2);

//conditions to check winner

if (randomNumber1 > randomNumber2) {
  headingOne.textContent = "Player 1  🎈🕺";
} else if (randomNumber1 < randomNumber2) {
  headingOne.textContent = "Player 2 wins 🕺🎈";
} else {
  headingOne.textContent = "Draw 🤗";
}

// function to reload window

btn.addEventListener("click", () => {
  window.location.reload();
});

//footer

footerInner.textContent = new Date().getFullYear();
