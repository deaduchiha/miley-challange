import { createContext, useEffect, useState } from "react";
import { getRandomWord } from "../../utils/functions";
import Submit from "../modules/submit";
import styles from "./Landing.module.css";

// eslint-disable-next-line react-refresh/only-export-components
export const wordsContext = createContext();

const Landing = () => {
  const [mainWord, setMainWord] = useState("");

  const [allWords, setAllWords] = useState([]);

  const arr = allWords.map((letter) => letter.split(""));
  console.log(allWords);
  console.log(arr);

  const [word, setWord] = useState("");
  const lowWord = word.toLowerCase();

  useEffect(() => {
    setMainWord(getRandomWord());
  }, []);

  return (
    <wordsContext.Provider value={{ lowWord, mainWord, allWords, setAllWords }}>
      <h1>{mainWord}</h1>

      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />

      <Submit />
      <div className={styles.words}>
        {arr.map((letters, index) => (
          <div key={index}>
            {letters.map((letter, index) => (
              <h4 key={index}>{letter}</h4>
            ))}
          </div>
        ))}
      </div>
    </wordsContext.Provider>
  );
};

export default Landing;
