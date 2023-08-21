var movingLine = document.getElementsByClassName("moving_line")[0];
var statusDot = document.getElementsByClassName("status_dot");
var title = document.getElementsByClassName("title");

const urlParams = new URLSearchParams(window.location.search);
const step = urlParams.get("step");

screenWidth = window.innerWidth;

setTimeout(() => {
  switch (step) {
    case "1":
      step1();
      break;
    case "2":
      step2();
      break;
    case "3":
      step3();
      break;
    case "4":
      step4();
      break;
  }
}, 0);

function step1() {
  statusDot[0].children[0].src = "assets/inprogress.png";
  movingLine.style.width = "0%";
  movingLine.style.height = "0%";
  title[0].style.color = "#00B1F2";
}
step1();

function step2() {
  statusDot[0].children[0].src = "assets/completed.png";
  movingLine.style.width = "25%";
  if (screenWidth <= 600) {
    movingLine.style.height = "25%";
  }
  setTimeout(() => {
    statusDot[1].children[0].src = "assets/inprogress.png";
    title[1].style.color = "#00B1F2";
  }, 1500);
}

function step3() {
  statusDot[0].children[0].src = "assets/completed.png";
  movingLine.style.width = "50%";
  if (screenWidth <= 600) {
    movingLine.style.height = "50%";
  }
  setTimeout(() => {
    statusDot[1].children[0].src = "assets/completed.png";
    title[1].style.color = "#00B1F2";
  }, 700);
  setTimeout(() => {
    statusDot[2].children[0].src = "assets/inprogress.png";
    title[2].style.color = "#00B1F2";
  }, 1500);
}

function step4() {
  statusDot[0].children[0].src = "assets/completed.png";
  movingLine.style.width = "75%";

  if (screenWidth <= 600) {
    movingLine.style.height = "75%";
  }
  setTimeout(() => {
    statusDot[1].children[0].src = "assets/completed.png";
    title[1].style.color = "#00B1F2";
  }, 500);
  setTimeout(() => {
    statusDot[2].children[0].src = "assets/completed.png";
    title[2].style.color = "#00B1F2";
  }, 1000);
  setTimeout(() => {
    statusDot[3].children[0].src = "assets/completed.png";
    title[3].style.color = "#00B1F2";
  }, 1500);
}
