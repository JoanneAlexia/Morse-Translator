import { errorMessages } from "./variables.js";

export const checkTooManyArguments = (input) => {
  if (input.length > 0) {
    throw new Error(errorMessages.tooManyArguments);
  }
};

export const checkNoArgument = (input) => {
  if (!input) {
    console.log(errorMessages.noInput);
    throw new Error(errorMessages.noInput);
  }
};
