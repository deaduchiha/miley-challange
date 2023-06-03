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

const getCommonCharacters = (randomWord, word) => {
  const randomWordArray = convertToArray(randomWord);
  const newWordArray = convertToArray(word);

  const commonCharacters = randomWordArray.filter((character) =>
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
  convertToArray,
  getCommonCharacters,
  isValidWord,
  generateBotRandomWord,
};
