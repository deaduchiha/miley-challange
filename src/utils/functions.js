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

const generateBotRandomWord = (originalWord, attempt = 0) => {
  let randomWord = getRandomWord();
  let commonLetters = getCommonCharacters(randomWord, originalWord);

  if (commonLetters.length >= 3) {
    return randomWord.toLowerCase();
  }

  const maxAttempts = 100;
  if (attempt < maxAttempts) {
    return generateBotRandomWord(originalWord, attempt + 1);
  }
};

export {
  getRandomWord,
  convertToArray,
  getCommonCharacters,
  isValidWord,
  generateBotRandomWord,
};
