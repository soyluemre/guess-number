//* =====================================
//*  GUESS MY NUMBER
//*  Game Logic
//*======================================

//? 1-100 arasinda rasgele bir sayi tut.

let randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

//? Variables

let score = 10;
// let topScore = 0;

//! localStorage'dan topScore adıyla bir değişken oluştur.

let topScore = localStorage.getItem("topScore") || 0;
//! DOM'daki top-score değerini localStorage'dan okuyarak güncelle
document.querySelector(".top-score").textContent = topScore;

//* CheckBtn basildiginda kontrolleri yap

document.querySelector(".check-btn").addEventListener("click", () => {
  const guessInput = Number(document.querySelector(".guess-input").value);
  const msg = document.querySelector(".msg");
  const body = document.querySelector("body");

  //? eger input girilmediyse Kullaniciya uyari ver.

  if (!guessInput) {
    msg.innerText = "Please enter a number";
  } else if (randomNumber === guessInput) {
    msg.innerHTML = `Congrats You Win <i class="fa-solid fa-face-grin-hearts fa-2x"></i>`;
    body.className = "bg-success";
    body.style.transition = "all 1s";

    if (score >= topScore) {
      // topScore = score;

      //! localStorage'daki topScore değişkeninin güncelle
      localStorage.setItem("topScore", score);
      //! DOM'daki top-score değerini güncelle
      document.querySelector(".top-score").textContent = score;
    }

    document.querySelector(".secret-number").textContent = randomNumber;

    //! eger rastgele != input.value
  } else {
    score--;
    if (score > 0) {
      guessInput > randomNumber
        ? (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-down"></i> DECREASE`)
        : (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-up"></i> INCREASE`);
    } else {
      msg.innerHTML = `You Lost <i class="fa-regular fa-face-sad-tear fa-2x"></i>`;
      document.querySelector(".secret-number").textContent = randomNumber;
      body.className = "bg-danger";
      body.style.transition = "all 1s";
      document.querySelector(".check-btn").disabled = true;
    }

    document.querySelector(".score").textContent = score;
  }
});

//* CheckBtn basildiginda oyunu başlangıç değerlerine kur

document.querySelector(".again-btn").addEventListener("click", () => {
  score = 10;
  document.querySelector(".score").textContent = score;
  randomNumber = Math.round(Math.random() * 100);
  document.querySelector(".secret-number").textContent = "?";
  console.log(randomNumber);
  document.querySelector(".check-btn").disabled = false;
  document.querySelector("body").classList.remove("bg-success", "bg-danger");
  document.querySelector(".guess-input").value = "";
  document.querySelector(".msg").innerText = "Starting..";
});

document.querySelector(".guess-input").addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    document.querySelector(".check-btn").click();
  }
});

//*****************************************/
//! LOCALSTORAGE - SESSIONSTORAGE
//*****************************************/

// myobj = { a: 4, b: 2, c: 5 };

// // objeyi stringe çevirdik
// localStorage.setItem("OBJ", JSON.stringify(myobj));

// const readObj = localStorage.getItem("OBJ");

// // stringi eski haline yani objeye çevirdik
// const readOBJ = JSON.parse(localStorage.getItem("OBJ"));

// console.log(typeof readObj);
// console.log(typeof readOBJ);
// console.log(readOBJ);

//* PSEUDO
//? eger score > topScore
//?     topScore = score
//? secret_number = gorunur.

//! değilse
//! eger score > 0
//!   score = score -1
//?   eğer rasgele < input.value
//?     AZALT
//?   degilse
//?     ARTTIR
//! degilse
//? Uzgunuz kaybetiniz.
