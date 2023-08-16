import { PRONOUNS } from "./constants";

export const countNewWords = (text: string) => {
  let newText = text.replaceAll("\n", " ");
  newText = newText.replaceAll(/\s\s+/g, " ");
  // console.log(newText);
  const newArr = newText.trim().split(" ");
  return newArr[0] === "" ? 0 : newArr.length;
};

export const countNewChars = (text: string) => {
  let newText = text.replaceAll("\n", " ");
  newText = newText.replaceAll(/\s+/g, "");

  return newText.trim().length;
};

export const countNewSentences = (text: string) => {
  let newText = text.replaceAll(" ", "");
  newText = newText.replaceAll(/[\n\n]+|[.?/;:\\]+/g, " ");
  newText = newText.replaceAll(/\s\s+/g, " ");

  const newArr = newText.trim().split(" ");
  return newArr[0] === "" ? 0 : newArr.length;
};

export const countNewParas = (text: string) => {
  let newText = text.trim().split(/\n+/g);
  return newText[0] === "" ? 0 : newText.length;
};

export const countNewPronouns = (text: string) => {
  const newWord = text
    .replaceAll(/[^a-zA-Z]+/g, " ")
    .trim()
    .split(" ");
  const count = newWord.reduce((acc: number, word: string) => {
    return acc += PRONOUNS.includes(word.toLowerCase()) ? 1 : 0;
  }, 0);

  return count;
};
