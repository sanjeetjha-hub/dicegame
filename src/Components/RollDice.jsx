import { styled } from "styled-components";

function RollDice({ currentDice, rollDice }) {
  return (
    <DiceContainer>
      <div>
        <div className="dice" onClick={rollDice}>
          <img src={`/images/dice_${currentDice}.png`} alt="dice" />
        </div>

        <p>Click on Dice to Roll</p>
      </div>
    </DiceContainer>
  );
}

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 38px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    width: 250px;
    cursor: pointer;
  }
  p {
    padding: 15px 10.5px 0px;
    font-size: 23px;
    width: 230px;
    height: 36px;
    font-weight: 700;
  }
`;
