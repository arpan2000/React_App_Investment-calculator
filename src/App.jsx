import { useState } from "react";
import ResultSection from "./components/ResultSection";
import UserInput from "./components/UserInput";

function App() {
  // for managing and storing the inputs provided by user
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  // function to update the state whenever value is changed
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <UserInput onChange={handleChange} userInput={userInput}/>
      {!inputIsValid && <p className="center">Please input a duration greater than zero.</p>}
      {inputIsValid && <ResultSection input={userInput}/>}
    </>
  );
}

export default App;
