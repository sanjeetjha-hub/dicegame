import styled from "styled-components";

function NumberSelector({
  error,
  setError,
  selectedNumber,
  setSelectedNumber,
}) {
  const arrayNum = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };
  return (
    <>
      <SelectedNumberDiv>
        <p className="error">{error}</p>
        <div className="flex">
          {arrayNum.map((value, i) => (
            <Box
              isSelected={value === selectedNumber}
              key={i}
              onClick={() => numberSelectorHandler(value)}
            >
              {value}
            </Box>
          ))}
        </div>
        <p>Selected Number</p>
      </SelectedNumberDiv>
    </>
  );
}
export default NumberSelector;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${({ isSelected }) => (isSelected ? "black" : "white")};
  color: ${({ isSelected }) => (isSelected ? "white" : "black")};
`;

const SelectedNumberDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
  .error {
    color: red;
  }
`;
