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

const generateBotRandomWord = (originalWord, difficulty, attempt = 0) => {
  const randomWord = getRandomWord();
  const commonLetters = getCommonCharacters(randomWord, originalWord);

  if (difficulty === "easy") {
    if (commonLetters.length >= 1) {
      return randomWord.toLowerCase();
    }
  } else if (difficulty === "medium") {
    if (commonLetters.length >= 2) {
      return randomWord.toLowerCase();
    }
  } else if (difficulty === "hard") {
    if (commonLetters.length >= 3) {
      return randomWord.toLowerCase();
    }
  }

  const maxAttempts = 100;
  if (attempt < maxAttempts) {
    return generateBotRandomWord(originalWord, difficulty, attempt + 1);
  }

  // Return a default value or handle the case when the maxAttempts limit is reached
  return "";
};

export {
  getRandomWord,
  convertToArray,
  getCommonCharacters,
  isValidWord,
  generateBotRandomWord,
};
