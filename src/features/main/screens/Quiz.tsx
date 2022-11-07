import { Common } from "../../common";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IRound, UserContext } from "src/config/context/user";
import { api } from "../services";

const {
  Components: { Container },
} = Common;

export const QuizScreen = () => {
  const navigate = useNavigate();
  const [quizData, setQuizData] = useState<IRound["round"]>();
  const [score, setScore] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const { round } = useContext(UserContext);

  useEffect(() => {
    setQuizData(round);
  }, [round]);

  const handleOption = (optionId: number) => {
    if (quizData?.questions) {
      api
        .postAnswer({
          roundId: round.id,
          questionId: quizData.questions[currentQuestion].id,
          answerId: optionId,
        })
        .then(({ answer }) => {
          if (answer.correct) setScore((prev) => prev + 1);
        });

      if (quizData && currentQuestion + 1 >= quizData?.questions.length) {
        navigate("/results");
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
    }
  };

  return (
    <Container width={500}>
      <Header>
        <span>
          {currentQuestion + 1}/{quizData?.questions.length}
        </span>
        <span>Certas: {score}</span>
      </Header>
      <h2>{quizData?.questions[currentQuestion]?.description}</h2>
      <OptionsList>
        {quizData?.questions[currentQuestion]?.options.map((option) => (
          <OptionItem key={option.id} onClick={() => handleOption(option.id)}>
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
