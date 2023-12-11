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
  const outputArray = [];
  let textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (element.includes(word)) {
      const boldSubStr = element.substr(element.indexOf(word), word.length);
      const bold = document.createElement("strong");
      bold.innerHTML = boldSubStr;
      const outputString = element.replace(boldSubStr, bold.outerHTML);
      outputArray.push(outputString);
    } else {
      outputArray.push(element);
    }
  });
  return outputArray.join(" ");
}

// function boldPassage(word, text) {
//   if (isEmpty(word) || isEmpty(text)) {
//     return null;
//   }
//   const outputArray = [];
//   let textArray = text.split(" ");
//   textArray.forEach(function(element) {
//     if (element.includes(word)) {
//       const boldSubStr = element.substr(element.indexOf(word), word.length);
//       const bold = "<strong>" + boldSubStr + "</strong>";
//       const outputString = element.replace(boldSubStr, bold);
//       outputArray.push(outputString);
//     } else {
//       outputArray.push(element);
//     }
//   });
//   return outputArray.join(" ");
// }

function countWordsNew(text) {
  const words = text.toLowerCase().split(" ").sort();
  const outputArr = [];
  let counter = 1;
  words.forEach(function(currentWord, index) {
    if (currentWord == words[index + 1]) {
      counter++;
    } else {
      outputArr.push(currentWord + ": " + counter);
      counter = 1;
    }
  })
  outputArr.sort(function(a,b) {
    const aArray = a.split(" ");
    const bArray = b.split(" ");
    const aNumber = parseInt(aArray[1]);
    const bNumber = parseInt(bArray[1]);
    return bNumber - aNumber;
  })
  return outputArr;
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
    document.querySelector("div#bolded-passage").innerHTML = boldedPassage;
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
  input.forEach(function(wordAndCount) {
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