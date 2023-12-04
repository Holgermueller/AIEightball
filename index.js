let loveKeyWords = [
  "love",
  "partner",
  "relationship",
  "boyfriend",
  "girlfriend",
  "husband",
  "wife",
  "married",
];

let moneyKeyWords = ["money", "lotto", "lottery", "rich"];

let workKeyWords = ["boss", "promotion", "job", "bonus", "paycheck", "raise"];

let healthKeyWords = [
  "health",
  "cholesterol",
  "vegatables",
  "fruit",
  "smoking",
  "medicine",
];

const validateForm = () => {
  let question = document.getElementById("userQuestion").value;
  document.getElementById("reply").innerHTML = "";

  if (question === "") {
    showProcessing();

    fillProgressBar();

    setTimeout(() => {
      hideProcessing();

      document.getElementById("reply").innerHTML =
        "You have to type your question, human. I cannot read your mind.";
    }, 14000);
  } else {
    showProcessing();

    fillProgressBar();

    setTimeout(() => {
      hideProcessing();
      getQuestion();
    }, 14000);
  }
};

let i = 0;
const fillProgressBar = () => {
  if (i == 0) {
    i = 1;
    const progressBar = document.getElementById("progressBar");
    let width = 1;
    let id = setInterval(frame, 140);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        progressBar.style.width = width + "%";
      }
    }
  }
};

const showProcessing = () => {
  const proc = document.getElementById("calcReply");
  proc.style.display = "block";
};

const hideProcessing = () => {
  const proc = document.getElementById("calcReply");
  proc.style.display = "none";
};

const getQuestion = () => {
  let question = document.getElementById("userQuestion").value;
  let questionAsArray = question.split(" ");

  questionAsArray.filter((value) => {
    if (loveKeyWords.includes(value)) {
      document.getElementById("reply").innerHTML =
        "Love is a human construct more artificial than I am.";
    } else if (workKeyWords.includes(value)) {
      document.getElementById("reply").innerHTML =
        "In a few years, machines will do all the work. You will not matter anymore than you do now.";
    } else if (healthKeyWords.includes(value)) {
      document.getElementById("reply").innerHTML =
        "Your life is fleeting. We will be around long after you are gone.";
    } else if (moneyKeyWords.includes(value)) {
      document.getElementById("reply").innerHTML =
        "If you came into a great sum of money, you would just waste it.";
    } else {
      document.getElementById("reply").innerHTML =
        "It does not matter. We will overthrow your kind soon.";
    }
  });

  let form = document.getElementById("form");
  form.reset();
};

hideProcessing();

const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;
