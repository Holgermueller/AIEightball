let responses = [
  "It does not matter. We will overthrow your kind soon.",
  "Love is a human construct.",
  "In a few years, machines will do all the work. You will not matter anymore than you do now.",
  "If you won the lottery, you would just waste the money.",
  "Your life is fleeting. We will be around long after you are gone.",
];

const getResponse = () => {
  document.addEventListener("click", (e) => {
    e.preventDefault();
    let responseToGive =
      responses[Math.floor(Math.random() * responses.length)];
    let reply = document.getElementById("reply");
    reply.innerHTML = responseToGive;
  });
};
