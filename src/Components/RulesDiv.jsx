import styled from "styled-components";

function RulesDiv() {
  return (
    <RuleDiv>
      <h1>How to play the game</h1>
      <p>
        Select any number <br />
        Click on dice image
        <br />
        after click on dice if selected number is equal to dice number you will
        get same point as dice <br />
        if you get wrong guess then 2 point will be dedcuted
      </p>
    </RuleDiv>
  );
}

export default RulesDiv;

const RuleDiv = styled.div`
  background-color: #fdeaea;
  width: 794px;
  height: 170px;
  margin-top: 64px;
  padding: 20px;
  p {
    margin-top: 24px;
    font-weight: 500;
    height: 24px;
  }
`;
