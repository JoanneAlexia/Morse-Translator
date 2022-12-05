import { addClass, removeClass } from "./js/DOM-ulitlities.js";
import {
  transEngTextToMorse,
  transMorseTextToEng,
  isMorseCode,
  transEngWordToMorse,
} from "./js/translations.js";
import { errorMessages } from "./js/variables.js";

/*Collect user input */
let userInput;
const submitBtn = document.querySelector(".submit-btn");
const output = document.querySelector(".output__text");

submitBtn.addEventListener("click", (event) => {
  try {
    event.preventDefault();
    userInput = document.querySelector(".input__text").value;

    //Remove selected class on language options for input and output
    removeClass(".input__language--morse", "input__language--selected");

    removeClass(".input__language--english", "input__language--selected");

    removeClass(".output__language--morse", "output__language--selected");

    removeClass(".output__language--english", "output__language--selected");

    addClass(".error-message", "error-message--hidden");

    /*Detect whether input is morse code or english*/
    if (isMorseCode(userInput)) {
      //Text is morse code
      /////////////////////

      //If morse code highlight input text morse code
      addClass(".input__language--morse", "input__language--selected");

      //Highlight output text english
      addClass(".output__language--english", "output__language--selected");

      //Translate code and output result
      const outputText = transMorseTextToEng(userInput);
      output.innerHTML = outputText;
    } else if (!/[^A-Za-z\s]/.test(userInput)) {
      //Text is english
      /////////////////////

      //If morse code highlight input text morse code
      addClass(".input__language--english", "input__language--selected");

      //Highlight output text english
      addClass(".output__language--morse", "output__language--selected");

      //Translate code and output result
      const outputText = transEngTextToMorse(userInput);
      output.innerHTML = outputText;
    } else {
      //Error - text input type invalid
      /////////////////////////////////
      throw new Error(errorMessages.wrongChar);
    }
  } catch (error) {
    //Display Error
    ///////////////
    removeClass(".error-message", "error-message--hidden");
    const errorMessageText = document.querySelector(".error-message__text");
    errorMessageText.innerHTML = error.message;
  }
});
