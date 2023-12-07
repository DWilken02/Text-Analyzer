// Utility Logic

function isEmpty(testString) {
  return (testString.trim().length === 0);
}

//Business Logic

function wordCounter(userText) {
  if (isEmpty(userText)) {
    return 0;
  }
  let wordCount = 0;
  const textArray = userText.split(" ");
  textArray.forEach(function(element) {
    if (!Number(element)) {      
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (isEmpty(word)) {
    return 0;
  }
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function includesRarestLetter(word) {
  if (word.toLowerCase().includes("q")) {
    return true;
  }
  return false;
}

function omitOffensiveWords(text) {
  const badWords = ["zoinks", "muppeteer", "biffaroni", "loopdalloop"];
  const regex = new RegExp(badWords.join("|"), "gi");
  return text.replace(regex, "****");
}

function boldPassage(word, text) {
  if (isEmpty(word) || isEmpty(text)) {
    return null;
  }
  const p = document.createElement("p");
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (word === element) {
      const bold = document.createElement("strong");
      bold.append(element);
      p.append(bold);
    } else {
      p.append(element);
    }
    if (index !== (textArray.length - 1)) {
      p.append(" ");
    }
  });
  return p;
}

/*
1. Sort words array
2. Loop through words array
3. Check current word for if it is the same as the prior word
4. Make the sure the word being checked isn't already in the results array
*/
function countWordsNew(text) {
  const words = text.toLowerCase().split(" ").sort();
  const output = [];
  let counter = 1;
  words.forEach(function(currentWord, index) {
    if (currentWord == words[index + 1]) {
      counter++;
    } else {
      output.push(currentWord + ": " + counter);
      counter = 1;
    }
  })
  return output;
}
function countWords(text) {
  const words = text.split(" ");
  const uniqueWords = [];
  const wordCount = [];
  words.forEach(function(currentWord) {
    if (!uniqueWords.includes(currentWord)) {
      uniqueWords.push(currentWord);
      wordCount.push(1);
    } else {
      const index = uniqueWords.indexOf(currentWord);
      wordCount[index]++;
    }
  }) 
  const output = [];
  uniqueWords.forEach(function(currentWord) {
    const index = uniqueWords.indexOf(currentWord);
    output.push(currentWord + ": " + wordCount[index])
  })
  return output;
}

//UI Logic

function handleFormSubmission(event) {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
  let boldedPassage = boldPassage(word, passage);
  if (boldedPassage) {
    document.querySelector("div#bolded-passage").append(boldedPassage);
  } else {
    document.querySelector("div#bolded-passage").innerText = null;
  }
  displayWordCountOutput(passage);
}

function displayWordCountOutput(passage) {
  const wordCountOutput = countWordsNew(passage);
  organizeOutput(wordCountOutput);
}

function organizeOutput(input) {
  const ulElement = document.createElement("ul");
  wordCountOutput.forEach(function(wordAndCount) {
    const liElement = document.createElement("li");
    liElement.append(wordAndCount);
    ulElement.append(liElement);
  })
  const body = document.querySelector("body");
  body.append(ulElement);
}

window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});