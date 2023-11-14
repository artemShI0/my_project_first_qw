document.querySelector(".start").onclick = startClick; // связь с кнопкой Start
document.querySelector(".Go").onclick = goClick; // связь с кнопкой Go
document.querySelector(".give").onclick = giveClick; // связь с кнопкой give
let iskom = "";
let myWarient = "";
let tries = 0;
let max_tries;
let polina;

Arr = [0,1,2,3,4,5,6,7,8,9,
  "!","@","#","$","%","^","&","*","*","(",")","-","_","+","=",
  "q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m",
  "Q","w","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M",
];

function startClick() {
  //генерируем комбинацию
  iskom = "";
  tries = 0;
  max_tries = document.querySelector(".tries").value;
  polina = document.querySelector(".pole").value;
  if (polina != 2 && polina != 3 && polina != 4) {
    polina = 1;
  }
  if (max_tries == "") {
    max_tries = 1000000;
  }
  let difficult = document.querySelector(".length").value;
  for (let i = 0; i < difficult; i++) {
    if (polina == 2) {
      let part = Arr[Math.floor(Math.random() * 25)];
      iskom = iskom.concat(part);
    } else if (polina == 3) {
      let part = Arr[Math.floor(Math.random() * 51)];
      iskom = iskom.concat(part);
    } else if (polina == 4) {
      let part = Arr[Math.floor(Math.random() * 77)];
      iskom = iskom.concat(part);
    } else {
      let part = Arr[Math.floor(Math.random() * 10)];
      iskom = iskom.concat(part);
    }
  }
}

function goClick() {
  //проверяем пользовательские варианты
  let myWarient = "";
  myWarient = document.querySelector(".inp").value;
  if (myWarient.length != iskom.length) {
    console.log("Wrong length of combination");
  } else {
    tries++;
    max_tries--;
    let place = check_place(iskom, myWarient);
    let have = check_have(iskom, myWarient) - place;
    output(have, place, myWarient);
    if (myWarient == iskom) {
      win();
      console.log("Win!", "       tries:", tries);
      max_tries = document.querySelector(".tries").value;
    } else if (max_tries == 0) {
      console.log("You lose")
      max_tries = document.querySelector(".tries").value;
      console.log("Correct combination was:", iskom);
    
    }
  }
}

function giveClick() {
  console.log(iskom);

}
