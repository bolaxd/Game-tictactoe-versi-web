const selectBox = document.querySelector(".select-box"),
selectXBtn = selectBox.querySelector(".playerX"),
selectOBtn = selectBox.querySelector(".playerY"),
playBoard = document.querySelector(".play-board"),
allBox = document.querySelectorAll("section span"),
players = document.querySelector(".players")
let array = []
window.onload = () => {
  for (let i = 0; i < allBox.length; i++) {
      allBox[i].setAttribute("onclick", "clickedBox(this)")
   }
   selectXBtn.onclick = () => {
      selectBox.classList.add("hide")
      playBoard.classList.add("show")
   }
   selectOBtn.onclick = () => {
      selectBox.classList.add("hide")
      playBoard.classList.add("show")
      players.setAttribute("class", "players active player")
   }
}
let playerXnya = 'X'
let playerOnya = 'O'
let playerMasuk = 'X'
//User bermain
function clickedBox(element) {
   console.log(element)
   if (players.classList.contains("player")) {
      element.innerHTML = 'O';
      players.classList.add("active");
      playerMasuk = 'O'
      element.setAttribute("id", playerMasuk)
   } else {
      element.innerHTML = 'X';
      players.classList.add("active");
      element.setAttribute("id", playerMasuk)
   }
   element.style.pointerEvents = "none"
   playBoard.style.pointerEvents = "none"
   setTimeout(() => {
   bot();
   }, 1400);
}
// Bot bermain
function bot () {
   playerMasuk = 'O'
   for (let i = 0; i < allBox.length; i++) {
      if(allBox[i].childElementCount == 0) {
         array.push(i)
      }
   }
   let random = array[Math.floor(Math.random() * array.length)]
   console.log(random);
   if (array.length > 0) {
      if (players.classList.contains("player")) {
         allBox[random].innerHTML = 'X';
         players.classList.remove("active");
         allBox[random].setAttribute("id", playerMasuk)
         playerMasuk = 'X'
      } else {
         allBox[random].innerHTML = 'O';
         players.classList.remove("active");
         allBox[random].setAttribute("id", playerMasuk)
      }
   }
   allBox[random].style.pointerEvents = "none"
   playBoard.style.pointerEvents = "auto"
}