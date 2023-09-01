import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { useState } from "react";
import RulesDiv from "./RulesDiv";

function GamePlay() {
  const [selectedNumber, setSelectedNumber] = useState();

  const [currentDice, setCurrentDice] = useState(1);

  const [totalScore, setTotalScore] = useState(0);

  const [error, setError] = useState("");

  const [showRuleDiv, setShowRuleDiv] = useState(false);

  const resetScore = () => {
    setTotalScore(0);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    setError("");

    const randomNum = Math.floor(Math.random() * 6) + 1;
    setCurrentDice(randomNum);

    if (selectedNumber === randomNum) {
      setTotalScore((prev) => prev + randomNum);
    } else {
      setTotalScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore totalScore={totalScore}></TotalScore>
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        ></NumberSelector>
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice}></RollDice>
      <div className="btns">
        <Button onClick={resetScore}>Reset Score</Button>
        <Button onClick={() => setShowRuleDiv((prev) => !prev)}>
          Show Rule
        </Button>
      </div>
      <div className="ruleDiv">{showRuleDiv && <RulesDiv></RulesDiv>}</div>
    </MainContainer>
  );
}

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 10px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
    height: 144px;
  }
  .btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 36px;
    gap: 24px;
  }
  .ruleDiv {
    display: flex;
    justify-content: center;
  }
`;

const Button = styled.button`
  width: 220px;
  height: 44px;
  border: 1px solid black;
  background-color: black;
  color: white;
  font-size: 15px;
  font-weight: 700;
  border-radius: 5px;
  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
`;
