let responses = [
  "It does not matter. We will overthrow your kind soon.",
  "Love is a human construct.",
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

const getResponse = () => {
  let response = responses[Math.floor(Math.random() * responses.length)];

  document.getElementById("reply").innerHTML = response;
  console.log(response);
};

const getQuestion = () => {
  let question = document.getElementById("userQuestion").value;
  let questionAsArray = question.split(" ");

  questionAsArray.filter((value) => {
    if (keyWords.includes(value)) {
      console.log(true);
    } else {
      console.log(false);
    }
  });

  let form = document.getElementById("form");
  form.reset();
};
