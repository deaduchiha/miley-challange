import { words } from "../../words";

const Landing = () => {
  const randomIndex = Math.floor(Math.random() * words.length);

  // Get the random word using the random index
  const randomWord = words[randomIndex];

  // Display the random word
  console.log("Random word:", randomWord);

  return (
    <>
      <h1>Landing</h1>
    </>
  );
};

export default Landing;
