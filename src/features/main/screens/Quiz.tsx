import { Common } from "../../common";
import styled from "styled-components";
import { useState } from "react";

const {
  Components: { Container },
} = Common;

const options = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
];

export const QuizScreen = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleOption = (e: any) => {
    setSelectedOption(e.target.value);
  };

  return (
    <Container width={500}>
      <Header>
        <span>1/3</span>
        <span>Certas: 0</span>
      </Header>
      <h2>Pergunta dasd asd das da sdfsdf sdffsd fsdf sdfs?</h2>
      <OptionsList>
        {options.map((option) => (
          <OptionItem key={option.value} onClick={handleOption}>
            {option.label}
          </OptionItem>
        ))}
      </OptionsList>
    </Container>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const OptionsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
  width: 100%;
`;

const OptionItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  border: 1px solid black;
  margin: 10px 0;
  cursor: pointer;
  background-color: #b5b5b5;

  :hover {
    background-color: #a5a5a5;
  }
`;
