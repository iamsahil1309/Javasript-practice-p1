const quotes = [
  "Be yourself.",
  "Stay positive.",
  "Keep learning.",
  "Never give up.",
];

document.getElementById("generate").addEventListener("click", () => {
  generateQuote();
});

function generateQuote() {
  let randomQuote = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[randomQuote];
}
