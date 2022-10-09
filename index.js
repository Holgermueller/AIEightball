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

  if (question === "") {
    document.getElementById("reply").innerHTML =
      "You have to type your question. I cannot read your mind.";
  } else {
    getQuestion();
  }
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
