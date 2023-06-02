import { useContext, useEffect } from "react";
import { getCommonCharacters, isValidWord } from "../../utils/functions";
import { wordsContext } from "../templates/Landing";
import UseToastify from "../../hooks/useToastify";
import { ToastContainer } from "react-toastify";

const Submit = () => {
  const { lowWord, mainWord, allWords, setAllWords } = useContext(wordsContext);

  useEffect(() => {
    console.log(allWords);
  }, [allWords]);

  const handleSubmit = () => {
    if (lowWord.length === 5) {
      if (isValidWord(lowWord)) {
        const correctWord = getCommonCharacters(mainWord, lowWord);

        if (!allWords.includes(lowWord)) {
          setAllWords([...allWords, lowWord]);
          console.log("common", correctWord);
        } else {
          UseToastify("The word is already entered.", "error");
        }

        console.log("common", correctWord);
      } else {
        UseToastify("please enter a valid word.", "error");
      }
    } else {
      UseToastify("please enter 5 word.", "error");
    }
  };
  return (
    <>
      <button onClick={handleSubmit}>submit</button>
      <ToastContainer />
    </>
  );
};

export default Submit;
