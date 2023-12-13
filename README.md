# Text-Analyzer

#### By **DWilken02**

#### _Analyzes entered text_

## Technologies used

* HTML
* JavaScript

## Description

This page analyzes the text you enter and outputs the words in order based on how many times they are entered. There is also an optional section were you can enter a word, part of a word, or a single letter which would then bold the word or the part of the word that you entered and output the sentence with the bolded words that you entered

## Tests:

Test #1
const text = "hello";
wordCounter(userText);
output: 1

Test #2
const text = "hello there";
wordCounter(text);
Output: 2

Test #3
wordCounter("");
Output: 0

Test #4
wordCounter("            ");
Output: 0

Test #5
wordCounter("hi there 77 19");
Output: 2

Test #6
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Output: 0

Test #7
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Output: 1

Test #8
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Output: 0

Test #9
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Output: 4

Test #10
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Output: 3

Test #11
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Output: 3

Test #12
const "Red! Red zoinks . I like red, green, and yellow.";
const word = "Red";
omitOffensiveWords(text);
output: Red! Red **** . I like red, green, and yellow.

Test #13
const text = "";
const word = "";
boldPassage(word, text);
Output: passed

Test #14
const word = "hello"
const text = "yo"
boldPassage(word, text);

Test #15
const word = "hello";
const text = "hello";
boldPassage(word, text);
Output: <p><strong>hello</strong></p>

Test #16
const word = "hello";
const text = "hello there";
boldPassage(word, text);
Output: <p><strong>hello</strong> there</p>

Test #17
const text = "Hi there hey yo hi hi yay yo whoa there whoa yay";
countWords(text);
Output: ["hi: 3", "there: 2", "hey: 1", "yo: 2", "yay: 2", "whoa: 2"]

Test #18
const input = ["hi: 3", "there: 2", "hey: 1", "yo: 2", "yay: 2", "whoa: 2"];
organizeOutput(input);
Output: ["hi: 3", "there: 2", "yo: 2", "yay: 2", "whoa: 2", "hey: 1"]

Test #19
const text = "Hi there hey yo hi hi yay yo whoa there whoa yay";
const word = "i";
boldPassage(word, text);
Output: <p>H<strong>i</strong> there hey yo h<strong>i</strong> h<strong>i</strong> yay yo whoa there whoa yay</p>

## Setup/Installation

1. Click the green code button
2. Then click download zip
3. Open the project folder
4. Then drag the index.html file to a browser of your choice

## License

If you run into any issues please contact me at DW@gmail.com.

Copyright (c) _12/12/23_ _DWilken02_