import styled from "styled-components";

function TotalScore({ totalScore }) {
  return (
    <ScoreContainer>
      <h1>{totalScore}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
}

export default TotalScore;

const ScoreContainer = styled.div`
  width: 300px;
  text-align: center;
  h1 {
    font-size: 100px;
    line-height: 90px;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
`;
