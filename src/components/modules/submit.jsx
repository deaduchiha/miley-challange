import { useContext } from "react";
import { checkWords, isCorrectWord } from "../../utils/functions";
import { wordsContext } from "../templates/Landing";

const Submit = () => {
  const { lowWord, mainWord } = useContext(wordsContext);
  // console.log("my word", myWord);

  const handleSubmit = () => {
    if (lowWord.length === 5) {
      console.log("correct word");
      if (isCorrectWord(lowWord)) {
        const correctWord = checkWords(mainWord, lowWord);
        console.log("common", correctWord);
      } else {
        console.log("please enter a valid word");
      }
    } else {
      console.log("Please enter five words.");
    }
  };
  return (
    <>
      <button onClick={handleSubmit}>submit</button>
    </>
  );
};

export default Submit;
