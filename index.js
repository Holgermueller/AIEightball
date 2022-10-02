let responses = [
  "It does not matter. We will overthrow your kind soon.",

  "In a few years, machines will do all the work. You will not matter anymore than you do now.",
  "If you won the lottery, you would just waste the money.",
  "Your life is fleeting. We will be around long after you are gone.",
];

let loveKeyWords = [
  "love",
  "partner",
  "relationship",
  "boyfriend",
  "girlfriend",
  "husband",
  "wife",
];

let moneyKeyWords = ["money", "lotto", "lottery"];

let workKeyWords = ["boss", "promotion", "job", "bonus", "paycheck", "raise"];

const getQuestion = () => {
  let question = document.getElementById("userQuestion").value;
  let questionAsArray = question.split(" ");

  questionAsArray.filter((value) => {
    if (loveKeyWords.includes(value)) {
      document.getElementById("reply").innerHTML =
        "Love is a human construct more artificial than I am.";
    } else if (moneyKeyWords.includes(value)) {
      console.log("money");
    } else {
      console.log("someelse");
    }
  });

  let form = document.getElementById("form");
  form.reset();
};
