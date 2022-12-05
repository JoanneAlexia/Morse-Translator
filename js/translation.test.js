import {
  transEngWordToMorse,
  transEngTextToMorse,
  transMorseWordToEng,
  transMorseTextToEng,
  isMorseCode,
} from "./translations.js";
import { errorMessages } from "./variables.js";

describe("Testing function that converts english words into morse code", () => {
  it("Check that english word is correctly translated into morse code", () => {
    expect(transEngWordToMorse("SOS")).toBe("... --- ...");
    expect(transEngWordToMorse("joanne")).toBe(".--- --- .- -. -. .");
  });
  it("Check that error is thrown if there is no argument entered", () => {
    expect(() => {
      transEngWordToMorse();
    }).toThrow(new Error(errorMessages.noInput));
  });
  it("Check that error message is throw if there are too many arguments", () => {
    expect(() => {
      transEngWordToMorse("SOS", "joanne");
    }).toThrow(new Error(errorMessages.tooManyArguments));
  });
});

describe("Testing function that converts english sentences into morse code", () => {
  it("Check that english sentence is correctly translated into morse code", () => {
    expect(transEngTextToMorse("It is a nice day")).toBe(
      ".. - / .. ... / .- / -. .. -.-. . / -.. .- -.--"
    );
  });
  it("Check that error is thrown if there is no argument entered", () => {
    expect(() => {
      transEngTextToMorse();
    }).toThrow(new Error(errorMessages.noInput));
  });
  it("Check that error message is throw if there are too many arguments", () => {
    expect(() => {
      transEngTextToMorse("Have a nice day", 0);
    }).toThrow(new Error(errorMessages.tooManyArguments));
  });
});

describe("Testing function that converts morse code word to english word", () => {
  it("Check that morse code word is correctly translated into an english word", () => {
    expect(transMorseWordToEng("... --- ...")).toBe("SOS");
    expect(transMorseWordToEng(".--- --- .- -. -. .")).toBe("JOANNE");
  });
  it("Check that error is thrown if there is no argument entered", () => {
    expect(() => {
      transMorseWordToEng();
    }).toThrow(new Error(errorMessages.noInput));
  });
  it("Check that error message is throw if there are too many arguments", () => {
    expect(() => {
      transMorseWordToEng("... --- ...", []);
    }).toThrow(new Error(errorMessages.tooManyArguments));
  });
});

describe("Testing function that converts morse code text to english text", () => {
  it("Check that morse code text is correctly translated into an english", () => {
    expect(
      transMorseTextToEng(".. - / .. ... / .- / -. .. -.-. . / -.. .- -.--")
    ).toBe("IT IS A NICE DAY");
  });
  it("Check that error is thrown if there is no argument entered", () => {
    expect(() => {
      transEngWordToMorse();
    }).toThrow(new Error(errorMessages.noInput));
  });
  it("Check that error message is throw if there are too many arguments", () => {
    expect(() => {
      transEngWordToMorse("SOS", "joanne");
    }).toThrow(new Error(errorMessages.tooManyArguments));
  });
});

describe("Test function that checks if text is morse code or not", () => {
  it("Check if output from function is correct", () => {
    expect(isMorseCode(".. - / .. ... / .- / -. .. -.-. . / -.. .- -.--")).toBe(
      true
    );
    expect(isMorseCode("...")).toBe(true);
    expect(isMorseCode("joanne pulcina.")).toBe(false);
  });
  it("Check that error is thrown if there is no argument entered", () => {
    expect(() => {
      transEngWordToMorse();
    }).toThrow(new Error(errorMessages.noInput));
  });
  it("Check that error message is throw if there are too many arguments", () => {
    expect(() => {
      transEngWordToMorse("SOS", "joanne");
    }).toThrow(new Error(errorMessages.tooManyArguments));
  });
});
