import {
  LOWERCASE_CHARS,
  NUMBERS,
  SYMBOLS,
  UPPERCASE_CHARS,
} from "./constants";
import { options } from "./types";

export const generateNewPassword = (
  length: number,
  options: options
): string => {
  const divided = Math.floor(length / 4);
  // console.log(divided);
  let newLen = length;
  let result = "";
  if (options.lowercase) {
    result += getRandomChar(LOWERCASE_CHARS, divided);
    newLen -= divided;
  }
  if (options.uppercase) {
    result += getRandomChar(UPPERCASE_CHARS, divided);
    newLen -= divided;
  }
  if (options.numbers) {
    result += getRandomChar(NUMBERS, divided);
    newLen -= divided;
  }
  if (options.spChars) {
    result += getRandomChar(SYMBOLS, divided);
    newLen -= divided;
  }

  if (newLen > 0) result += getRandomChar(LOWERCASE_CHARS, newLen);

  return randomize(result);
};

const randomize = (result: string) => {
  const len = result.length;
  const arr = result.split("");
  for (let index = 0; index < len; index++) {
    const rIdx = Math.floor(Math.random() * len);
    const temp = arr[rIdx];
    arr[rIdx] = arr[index];
    arr[index] = temp;
  }
  console.log(arr.join(""));
  return arr.join("");
};

const getRandomChar = (str: string, length: number): string => {
  const strLength = str.length;
  let result = "";
  for (let index = 0; index < length; index++) {
    const rIdx = Math.floor(Math.random() * strLength);
    result += str.charAt(rIdx);
  }
  // console.log(result,"result")
  return result;
};
