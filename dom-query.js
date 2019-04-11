// ACCESSING BY ID
// the window.onload allows the DOM to render completely before trying to declare the variable
window.onload = function() {
  const headerEl = document.querySelector("#blog__header");
  console.log(`innerHTML of H1 after window.onload:`, headerEl.innerHTML);
};

// same code as above, works, but initially cannot read property before DOM completely renders
const headerEl = document.querySelector("#blog__header");
console.log(`innerHTML of H1:`, headerEl.innerHTML);

// ACCESSING BY CLASS
const sectionEl = document.querySelector(".article__section");
console.log("sectionEl", sectionEl);

const footerEl = document.querySelector(".article__footer");
console.log("footerEl", footerEl);

const smallTextEl = document.querySelector(".smallText");
console.log("smallTextEl", smallTextEl);

smallTextEl.classList.remove("smallText");
smallTextEl.classList.add("largeText");

const snackTitle = document.querySelector("#snackTitle");
snackTitle.classList.add("urgent");

const sectionEls = document.querySelectorAll(".article__section");
console.log(sectionEls);

const sectionFooterEls = document.querySelectorAll(".article__footer");
console.log(sectionFooterEls);
