import { useContext, useEffect } from "react";
import { getCommonCharacters, isValidWord } from "../../utils/functions";
import { wordsContext } from "../templates/Landing";

const Submit = () => {
  const { lowWord, mainWord, allWords, setAllWords } = useContext(wordsContext);
  // console.log("my word", myWord);

  useEffect(() => {
    console.log(allWords);
  }, [allWords]);

  const handleSubmit = () => {
    if (lowWord.length === 5) {
      console.log("correct word");
      if (isValidWord(lowWord)) {
        const correctWord = getCommonCharacters(mainWord, lowWord);

        setAllWords([...allWords, lowWord]);

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
