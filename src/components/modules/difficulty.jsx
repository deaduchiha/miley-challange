import { useContext, useEffect } from "react";
import { wordsContext } from "../templates/Landing";
import { getRandomWord } from "../../utils/functions";
import UseToastify from "../../hooks/useToastify";

const Difficulty = () => {
  const {
    selectedDifficulty,
    setSelectedDifficulty,
    setAllWords,
    setMainWord,
  } = useContext(wordsContext);
  const difficulty = ["easy", "medium", "hard"];

  useEffect(() => {}, [selectedDifficulty]);

  const handleDifficultyChange = (event) => {
    setSelectedDifficulty(event.target.value);

    setAllWords([]);
    setMainWord(getRandomWord());
    UseToastify(`change difficulty successfully`, "success");
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 20,
        left: 20,
        textAlign: "left",
      }}
    >
      <h3>Difficulty:</h3>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {difficulty.map((dif) => (
          <label htmlFor={dif} key={dif}>
            {dif}{" "}
            <input
              type="radio"
              id={dif}
              name="difficulty"
              value={dif}
              checked={selectedDifficulty === dif}
              onChange={handleDifficultyChange}
            />
          </label>
        ))}
      </div>
    </div>
  );
};
export default Difficulty;
