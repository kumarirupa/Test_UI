var movingLine = document.getElementsByClassName("moving_line")[0];
var statusDot = document.getElementsByClassName("status_dot");
var title = document.getElementsByClassName("title");
var desc = document.getElementsByClassName("status_desc");

const urlParams = new URLSearchParams(window.location.search);
const step = urlParams.get("step");

screenWidth = window.innerWidth;

const application_status = {
  application_submission: "Application submission",
  application_submitted: "Application Submitted",

  application_in_progress: "Verification in Progress",
  application_verification: "Application Verification",
  application_verified: "Application Verified",

  application_approval: "Application Approval",
  application_approval_in_progress: "Application Approval in Progress",
  application_approved: "Application Approved",

  physical_card_delivery: "Physical Card Delivery",
  physical_card_delivery_in_progress: "Physical Card Delivery in Progress",
  physical_card_delivered: "Physical Card Delivered",
};

const application_sub_status = {
  application_submission: "Your application submission is in progress",
  application_submitted: "Your application has been completed.",

  application_in_progress:
    "Your application is under policy checks and verification.",
  application_verified:
    "Your application is under policy checks and verification is done",

  application_approval_in_progress: "Your Application is in Progress",
  application_approved: "Your Application has been Approved",

  physical_card_delivery_in_progress:
    "Your Physical Card Delivery is in Progress",
  physical_card_delivered:
    "Your physical card has been dispatched! It’s on it’s way to you.",
};

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
    case "5":
      step5();
      break;
  }
}, 0);

function step1() {
  statusDot[0].children[0].src = "assets/inprogress.png";
  movingLine.style.width = "0%";
  movingLine.style.height = "0%";
  title[0].style.color = "#00B1F2";
  title[0].innerHTML = application_status.application_submission;
  desc[0].innerHTML = application_sub_status.application_submission;
}
step1();

function step2() {
  statusDot[0].children[0].src = "assets/completed.png";
  desc[0].innerHTML = application_sub_status.application_submitted;
  title[0].innerHTML = application_status.application_submitted;
  movingLine.style.width = "25%";
  if (screenWidth <= 600) {
    movingLine.style.height = "25%";
  }
  setTimeout(() => {
    statusDot[1].children[0].src = "assets/inprogress.png";
    title[1].style.color = "#00B1F2";
    title[1].innerHTML = application_status.application_in_progress;
    desc[1].innerHTML = application_sub_status.application_in_progress;
  }, 1500);
}

function step3() {
  title[0].innerHTML = application_status.application_submitted;
  desc[0].innerHTML = application_sub_status.application_submitted;
  statusDot[0].children[0].src = "assets/completed.png";
  movingLine.style.width = "50%";
  if (screenWidth <= 600) {
    movingLine.style.height = "50%";
  }
  setTimeout(() => {
    statusDot[1].children[0].src = "assets/completed.png";
    title[1].style.color = "#00B1F2";
    title[1].innerHTML = application_status.application_verified;
    desc[1].innerHTML = application_sub_status.application_verified;
  }, 700);
  setTimeout(() => {
    statusDot[2].children[0].src = "assets/inprogress.png";
    title[2].style.color = "#00B1F2";
    title[2].innerHTML = application_status.application_approval_in_progress;
    desc[2].innerHTML = application_sub_status.application_approval_in_progress;
  }, 1500);
}

function step4() {
  desc[0].innerHTML = application_sub_status.application_submitted;
  title[0].innerHTML = application_status.application_submitted;
  statusDot[0].children[0].src = "assets/completed.png";
  movingLine.style.width = "75%";

  if (screenWidth <= 600) {
    movingLine.style.height = "75%";
  }
  setTimeout(() => {
    statusDot[1].children[0].src = "assets/completed.png";
    title[1].style.color = "#00B1F2";
    title[1].innerHTML = application_status.application_verified;
    desc[1].innerHTML = application_sub_status.application_verified;
  }, 500);
  setTimeout(() => {
    statusDot[2].children[0].src = "assets/completed.png";
    title[2].style.color = "#00B1F2";
    title[2].innerHTML = application_status.application_approved;
    desc[2].innerHTML = application_sub_status.application_approved;
  }, 1000);
  setTimeout(() => {
    statusDot[3].children[0].src = "assets/inprogress.png";
    title[3].style.color = "#00B1F2";
    title[3].innerHTML = application_status.physical_card_delivery_in_progress;
    desc[3].innerHTML =
      application_sub_status.physical_card_delivery_in_progress;
  }, 1500);
}

function step5() {
  desc[0].innerHTML = application_sub_status.application_submitted;
  title[0].innerHTML = application_status.application_submitted;
  statusDot[0].children[0].src = "assets/completed.png";
  movingLine.style.width = "75%";

  if (screenWidth <= 600) {
    movingLine.style.height = "75%";
  }
  setTimeout(() => {
    statusDot[1].children[0].src = "assets/completed.png";
    title[1].style.color = "#00B1F2";
    title[1].innerHTML = application_status.application_verified;
    desc[1].innerHTML = application_sub_status.application_verified;
  }, 500);
  setTimeout(() => {
    statusDot[2].children[0].src = "assets/completed.png";
    title[2].style.color = "#00B1F2";
    title[2].innerHTML = application_status.application_approved;
    desc[2].innerHTML = application_sub_status.application_approved;
  }, 1000);
  setTimeout(() => {
    statusDot[3].children[0].src = "assets/completed.png";
    title[3].style.color = "#00B1F2";
    title[3].innerHTML = application_status.physical_card_delivered;
    desc[3].innerHTML = application_sub_status.physical_card_delivered;
  }, 1500);
}
