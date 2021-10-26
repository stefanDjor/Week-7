
const hamburger = document.getElementById("hamburger");
const menuDisplay = document.getElementById("menu-display")
const modal = document.getElementById("myModal");
const btn = document.getElementById("but-id");
const closeX = document.getElementById("close-modal-x");
const anotherBtn = document.getElementById("press-but");
const anotherBtn2 = document.getElementById("press-but2");
const hamburgerBtnMobile = document.getElementById("hamburger-btn");
const butThenks = document.getElementById("but-thenks-first");
const butThenks2 = document.getElementById("but-thenks-second");
const butThenks3 = document.getElementById("but-thenks-three");
const butThenks4 = document.getElementById("but-thenks-four");
const modal2 = document.getElementById("myModal-thanks");
const butGotIt = document.getElementById('but-got-it');
const links = document.querySelectorAll(".links")
const bookmarkDiv = document.querySelector(".bookmark-action")
const inputBlack = document.getElementById("black")
const changetext = document.querySelector(".bookmark")
const bambo = document.getElementById('bamboo');
const black = document.getElementById('black');
const noReword = document.getElementById('pledge');
const mahoganycheck = document.getElementById("mahogany")
const mahagany = document.getElementById('press-but3');
const mahaganyChecked = document.getElementById('mahogany');
const bamboSpace = document.getElementById('bamboo-space');
const blackSpace  = document.getElementById('black-space');
const mahaganySpace = document.getElementById('mahogany-space');
const pledgeSpace = document.getElementById('pledge-space');

const totalBacked = document.getElementById("cashe");
const totalBackers = document.getElementById("total-backers");
const progressBar = document.getElementById("progres-bar");
const modalThanks = document.querySelector(".thanks-modal");

const totalBackedNum = Math.round(parseFloat(totalBacked.innerText.replace(",", "")));
const totalBackersNum = Math.round(parseFloat(totalBackers.innerText.replace(",", "")));

let newTotal = totalBackedNum;
let newTotalBackers = totalBackersNum;


function handleContinueBtnClick(inputSelector, count) {
  modalThanks.style.display = "flex";
  const inputEl = parseInt(document.querySelector(inputSelector).value);
  newTotal += inputEl;
  const newTotalToComma = newTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  totalBacked.innerText = newTotalToComma;
  newTotalBackers++;
  const newTotalBackersToComma = newTotalBackers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  totalBackers.innerText = newTotalBackersToComma;
  const progress = newTotal / 1000;
  progressBar.style.width = `${progress}` + "%";
  const countPledgeValue = parseInt(document.querySelector(count).innerText);
  let countTotal = countPledgeValue;
  countTotal--;
  const countTotalToString = countTotal.toString();
  const allCountElements = document.querySelectorAll(count);
  allCountElements.forEach((el) => {
    el.innerText = countTotalToString;
  });
}
butThenks.addEventListener("click", () => {
  handleContinueBtnClick(".bamboo-input", ".number-one");
});

butThenks2.addEventListener("click", () => {
  handleContinueBtnClick(".black-input", ".number-two");
});

const bookmarkBtn = document.querySelector(".bookmark");

bookmarkBtn.addEventListener("click", () => {
  bookmarkBtn.classList.toggle("bookmark-button");
  bookmarkBtn.classList.toggle("bookmarked-button");

  if (bookmarkBtn.classList.contains("bookmarked-button")) {
    bookmarkBtn.innerText = "Bookmarked";
  } else {
    bookmarkBtn.innerText = "Bookmark";
  }
});

black.onclick = function(){
  black.checked = true;
  blackSpace.style.display = "block";
  bamboSpace.style.display = "none"
  pledgeSpace.style.display = "none"
  mahaganySpace.style.display = "none"
}
bambo.onclick = function () {
  bambo.checked = true;
  bamboSpace.style.display = "block"
  blackSpace.style.display = "none"
  pledgeSpace.style.display = "none"
  mahaganySpace.style.display = "none"
}
noReword.onclick = function () {
  noReword.checked = true;
  pledgeSpace.style.display = "block"
  blackSpace.style.display = "none"
  bamboSpace.style.display = "none"
  mahaganySpace.style.display = "none"
}
mahoganycheck.onclick = function () {
  mahagany .checked = true;
  mahaganySpace.style.display = "block"
  blackSpace.style.display = "none"
  bamboSpace.style.display = "none"
  pledgeSpace.style.display = "none"
}
function showBurgerMenu() {
  if (hamburger.src.match("img/icon-hamburger.svg")) {
      hamburger.src = "img/icon-close-menu.svg";
      menuDisplay.style.display = "block";
  }
  else {
      hamburger.src = "img/icon-hamburger.svg";
      menuDisplay.style.display = "none";
  }
  window.onclick = function(event) {
      if (event.target == menuDisplay) {
        menuDisplay.style.display = "none";
        hamburger.src = "img/icon-hamburger.svg";
      }
  }
    
}  
hamburger.addEventListener("click", showBurgerMenu);

btn.onclick = function() {
  modal.style.display = "block";
  noReword.checked = true;
  pledgeSpace.style.display = "block"
  blackSpace.style.display = "none"
  bamboSpace.style.display = "none"
}
closeX.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
anotherBtn.onclick = function (){
    modal.style.display = "block";
    bambo.checked = true;
    bamboSpace.style.display = "block"
    pledgeSpace.style.display = "none"
    blackSpace.style.display = "none"

}
anotherBtn2.onclick = function (){
    modal.style.display = "block";  
    black.checked = true; 
    blackSpace.style.display = "block"
    pledgeSpace.style.display = "none"
    bamboSpace.style.display = "none"
}
// mahagany.onclick = function (){
//   modal.style.display = "block";
//   mahaganyChecked.checked = true;
//   mahaganySpace.style.display = "block"

// }
butThenks.onclick = function (){
    modal.style.display = "none";
    modal2.style.display = "block";
}
butThenks2.onclick = function (){
    modal.style.display = "none";
    modal2.style.display = "block";
}
butThenks3.onclick = function (){
  modal.style.display = "none";
  modal2.style.display = "block";
}
butThenks4.onclick = function (){
  modal.style.display = "none";
  modal2.style.display = "block";
}
butGotIt.onclick = function() {
    modal2.style.display = "none";
}
links.forEach ( link => {
  link.addEventListener('click', () =>{
    menuDisplay.classList.toggle("open-menu")
  })
}) 
let isBookmarked = JSON.parse(localStorage.getItem("isBookmarked"))
if (isBookmarked) bookmarkDiv.classList.add("bookmarked")
const handleBookmarkClick = () => {
    if (!isBookmarked) {
        localStorage.setItem("isBookmarked", "true")
        bookmarkDiv.classList.add("bookmarked")
        changetext.textContent = "Bookmarked";
        isBookmarked = true
    } else {
        localStorage.setItem("isBookmarked", "false")
        bookmarkDiv.classList.remove("bookmarked")
        changetext.textContent = "Bookmark";
        isBookmarked = false
    }
}
bookmarkDiv.addEventListener("click", handleBookmarkClick)
