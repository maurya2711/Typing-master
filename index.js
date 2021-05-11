const sentences = [
  "The teens wondered what was kept in the red shed on the far edge of the school grounds.",
  "She lived on Monkey Jungle Road and that seemed to explain all of her strangeness.",
  "It was at that moment that he learned there are certain parts of the body that you should never Nair.",
  "My uncle's favorite pastime was building cars out of noodles.",
  "He stepped gingerly onto the bridge knowing that enchantment awaited on the other side.",
  "Peanuts don't grow on trees, but cashews do.",
  "I covered my friend in baby oil.",
  "If any cop asks you where you were, just say you were visiting Kansas.",
  "Carol drank the blood as if she were a vampire.",
  "Mary plays the piano.",
];

const msg = document.getElementById("msg");
const myWords = document.getElementById("mywords");
const btn = document.getElementById("btn");

let startTime, endTime;

const playGame = () => {
  let randomNumber = Math.floor(Math.random() * sentences.length);
  msg.innerText = sentences[randomNumber];
  let date = new Date();
  startTime = date.getTime();
  btn.innerText = "Done";
};

const endPlay = () => {
  let date = new Date();
  endTime = date.getTime();
  let totalTime = (endTime - startTime) / 1000;
  console.log(totalTime);

  let totalStr = myWords.value;
  let wordCount = wordCounter(totalStr);

  let speed = Math.round((wordCount / totalTime) * 60);
  let finalMsg = "You typed total at " + speed + " words per minutes.";
  finalMsg += compareWords(msg.innerText, totalStr);

  msg.innerText = finalMsg;
};

const wordCounter = (str) => {
  let response = str.split(" ").length;
  return response;
};

const compareWords = (str1, str2) => {
  let words1 = str1.split(" ");
  let words2 = str2.split(" ");
  let count = 0;

  words1.forEach(function (item, index) {
    if (item == words2[index]) {
      count++;
    }
  });
  let errorWords = words1.length - count;
  return (
    count +
    "correct out of " +
    words1.length +
    " words and the total number of error are " +
    errorWords +
    "."
  );
};
btn.addEventListener("click", function () {
  if (this.innerText == "Start") {
    myWords.disabled = false;
    playGame();
  } else if (this.innerText == "Done") {
    myWords.disabled = true;
    btn.innerText = "Start";
    endPlay();
  }
});
