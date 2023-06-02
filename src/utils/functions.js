import { words } from "../words";

const generateRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex];
  return randomWord.toLocaleLowerCase();
};

const changeToArray = (word) => {
  const mainWord = [...word.toLocaleLowerCase()];
  return mainWord;
};

const checkWords = (correctWord, word) => {
  // Convert the words to arrays and lowercase the characters
  const mainWordArray = [...correctWord.toLowerCase()];
  const newWordArray = [...word.toLowerCase()];

  // Use the filter method to find common characters
  const commonCharacters = mainWordArray.filter((character) =>
    newWordArray.includes(character)
  );

  return commonCharacters;
};

const isCorrectWord = (word) => {
  const lowercaseWords = words.map((w) => w.toLowerCase());
  return lowercaseWords.includes(word.toLowerCase());
};

const generateBotRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex];
  return randomWord.toLocaleLowerCase();
};

export {
  generateRandomWord,
  changeToArray,
  checkWords,
  isCorrectWord,
  generateBotRandomWord,
};
