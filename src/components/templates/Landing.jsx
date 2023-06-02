import { createContext, useEffect, useState } from "react";
import { changeToArray, generateRandomWord } from "../../utils/functions";
import Submit from "../modules/submit";
import styles from "./Landing.module.css";

// eslint-disable-next-line react-refresh/only-export-components
export const wordsContext = createContext();

const Landing = () => {
  const [mainWord, setMainWord] = useState("");
  const myWord = changeToArray(mainWord);

  const [word, setWord] = useState("");
  const lowWord = word.toLowerCase();

  useEffect(() => {
    setMainWord(generateRandomWord());
  }, []);

  return (
    <wordsContext.Provider value={{ lowWord, mainWord }}>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />

      <Submit />
      <div className={styles.test}>
        {myWord.map((letter, index) => (
          <h4 key={index}>{letter}</h4>
        ))}
      </div>
    </wordsContext.Provider>
  );
};

export default Landing;
