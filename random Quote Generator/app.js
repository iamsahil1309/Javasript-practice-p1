const quotes = [
  "Believe you can and you're halfway there.",
  "Do one thing every day that scares you.",
  "Dream big. Start small. Act now.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Wake up with determination. Go to bed with satisfaction.",
  "It always seems impossible until it’s done.",
  "Small steps every day lead to big results.",
  "Don’t wait for opportunity. Create it.",
  "Your only limit is your mind.",
  "Doubt kills more dreams than failure ever will.",
  "Work hard in silence. Let success make the noise.",
  "Success is what happens after you survive your mistakes.",
  "Discipline is choosing between what you want now and what you want most.",
  "If it was easy, everyone would do it.",
  "Be stronger than your excuses.",
  "The secret to getting ahead is getting started.",
  "You don’t have to be great to start, but you have to start to be great.",
  "Action is the foundational key to all success.",
  "Don’t compare your chapter 1 to someone else’s chapter 20.",
  "Your future is created by what you do today, not tomorrow.",
  "Focus on progress, not perfection.",
  "Failure is not the opposite of success, it’s part of success.",
  "A little progress each day adds up to big results.",
  "The best view comes after the hardest climb.",
  "Hard work beats talent when talent doesn’t work hard.",
  "Your attitude determines your direction.",
  "Success is built on consistency.",
  "Turn your wounds into wisdom.",
  "Make today so awesome that yesterday gets jealous.",
  "Don’t limit your challenges. Challenge your limits.",
  "You are stronger than you think.",
  "Every moment is a fresh beginning.",
  "Start where you are. Use what you have. Do what you can.",
  "The pain you feel today will be the strength you feel tomorrow.",
  "Don’t be afraid to give up the good to go for the great.",
  "Your vibe attracts your tribe.",
  "Courage is one step ahead of fear.",
  "Do something today that your future self will thank you for.",
  "You miss 100% of the shots you don’t take.",
  "Hustle in silence and let your success roar.",
  "Be the energy you want to attract.",
  "Success is the sum of small efforts repeated day in and day out.",
  "The best time to start was yesterday. The second best time is now.",
  "What you think, you become.",
  "Growth begins at the end of your comfort zone.",
];

const generate = document.getElementById("generate");
const quote = document.getElementById("quote");

function randomQuote() {
  let random = Math.floor(Math.random() * quotes.length);
  return quotes[random];
}

generate.addEventListener("click", () => {
  quote.innerText = randomQuote();
});
