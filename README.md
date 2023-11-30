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
omitOffensiveWords(text)
output: Red! Red **** . I like red, green, and yellow.

Test #13
const text = "";
const word = "";
boldPassage(word, text);
Output: passed