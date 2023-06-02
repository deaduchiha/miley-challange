import { words } from "../words";

const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex];
  return randomWord.toLowerCase();
};

const convertToArray = (word) => {
  const wordArray = [...word.toLowerCase()];
  return wordArray;
};

const getCommonCharacters = (correctWord, word) => {
  const correctWordArray = convertToArray(correctWord);
  const newWordArray = convertToArray(word);

  const commonCharacters = correctWordArray.filter((character) =>
    newWordArray.includes(character)
  );

  return commonCharacters;
};

const isValidWord = (word) => {
  const lowercaseWords = words.map((w) => w.toLowerCase());
  return lowercaseWords.includes(word.toLowerCase());
};

const generateBotRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex];
  return randomWord.toLowerCase();
};

export {
  getRandomWord,
  getCommonCharacters,
  isValidWord,
  generateBotRandomWord,
};
