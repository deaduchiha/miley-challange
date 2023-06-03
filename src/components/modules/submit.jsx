import { useContext } from "react";
import { generateBotRandomWord, isValidWord } from "../../utils/functions";
import { wordsContext } from "../templates/Landing";
import UseToastify from "../../hooks/useToastify";
import { ToastContainer } from "react-toastify";

const Submit = () => {
  const { lowWord, allWords, setAllWords, mainWord, setWord } =
    useContext(wordsContext);

  const botWord = generateBotRandomWord();

  const handleSubmit = () => {
    if (lowWord.length === 5) {
      if (isValidWord(lowWord)) {
        if (!allWords.includes(lowWord)) {
          setAllWords([...allWords, lowWord]);
          UseToastify("Its bot turn wait please", "success");

          setTimeout(function () {
            setAllWords([...allWords, lowWord, botWord.toLocaleLowerCase()]);
          }, 1500);
          // setAllWords([...allWords, lowWord]);

          if (mainWord === lowWord) {
            UseToastify("You win game.😁🙌🏽", "success");
            setTimeout(function () {
              location.reload();
            }, 3000);
          }
        } else {
          UseToastify("The word is already entered", "error");
        }
      } else {
        UseToastify("please enter a valid word", "error");
      }
    } else {
      UseToastify("please enter 5 word", "error");
    }
    setWord("");
  };
  return (
    <>
      <button onClick={handleSubmit}>submit</button>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default Submit;
