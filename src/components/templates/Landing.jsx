import { createContext, useEffect, useState } from "react";
import {
  convertToArray,
  getCommonCharacters,
  getRandomWord,
} from "../../utils/functions";
import Submit from "../modules/submit";
import styles from "./Landing.module.css";

// eslint-disable-next-line react-refresh/only-export-components
export const wordsContext = createContext();

const Landing = () => {
  const [mainWord, setMainWord] = useState("");
  const [allWords, setAllWords] = useState([]);
  const [word, setWord] = useState("");

  const mainWordArray = convertToArray(mainWord);

  const arr = allWords.map((letter) => letter.split(""));
  const lowWord = word.toLowerCase();

  useEffect(() => {
    setMainWord(getRandomWord());
  }, []);

  return (
    <wordsContext.Provider
      value={{ lowWord, mainWord, allWords, setAllWords, setWord }}
    >
      <div className={styles.holder}>
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />

        <Submit />
      </div>
      <div className={styles.words}>
        {arr.map((letters, index) => (
          <div key={index}>
            {letters.map((letter, subIndex) => (
              <h4
                key={subIndex}
                style={{
                  background:
                    (letter === mainWordArray[subIndex] && "green") ||
                    (getCommonCharacters(mainWord, allWords[index]).includes(
                      letter
                    ) &&
                      "yellow"),
                }}
              >
                {letter}
              </h4>
            ))}
          </div>
        ))}
      </div>
    </wordsContext.Provider>
  );
};

export default Landing;
