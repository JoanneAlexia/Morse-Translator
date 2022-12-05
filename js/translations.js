import { translationKey, errorMessages } from "./variables.js";
import { checkNoArgument, checkTooManyArguments } from "./checks.js";

export function transEngWordToMorse(word, ...extraArg) {
  //Performs checks
  checkNoArgument(word);
  checkTooManyArguments(extraArg);

  const engWordArr = [...word];
  const morseWord = engWordArr.reduce((morseWord, engLetter) => {
    morseWord += `${translationKey[engLetter.toUpperCase()]} `;
    return morseWord;
  }, "");
  return morseWord.slice(0, -1);
}

export function transEngTextToMorse(text, ...extraArg) {
  //Performs checks
  checkNoArgument(text);
  checkTooManyArguments(extraArg);

  const wordArr = text.split(" ");

  const morseText = wordArr.reduce((morseText, engWord) => {
    return (morseText += `${transEngWordToMorse(engWord)} / `);
  }, "");
  return morseText.slice(0, -3);
}

export function transMorseWordToEng(word, ...extraArg) {
  //Performs checks
  checkNoArgument(word);
  checkTooManyArguments(extraArg);

  const morseWordChars = word.split(" ");
  return morseWordChars.reduce((englishWord, morseChar) => {
    return (englishWord += Object.keys(translationKey).find(
      (letter) => translationKey[letter] === morseChar
    ));
  }, "");
}

export function transMorseTextToEng(text, ...extraArg) {
  //Performs checks
  checkNoArgument(text);
  checkTooManyArguments(extraArg);

  const morseWords = text.split("/");
  return morseWords
    .reduce((englishSentence, morseWord) => {
      return (englishSentence += `${transMorseWordToEng(morseWord.trim())} `);
    }, "")
    .slice(0, -1);
}

export function isMorseCode(text, ...extraArg) {
  //Performs checks
  checkNoArgument(text);
  checkTooManyArguments(extraArg);

  const morseCodeSymbols = [".", "-", " ", "/"];
  if ([...text].every((char) => morseCodeSymbols.includes(char))) return true;
  else {
    return false;
  }
}
