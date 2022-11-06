import { Common } from "../../common";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const {
  Components: { Container },
} = Common;

interface IQuiz {
  question: string;
  answers: {
    text: string;
    correct: boolean;
    id: any;
  }[];
}

const quizAPI: IQuiz[] = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "New York", correct: false, id: Symbol() },
      { text: "London", correct: false, id: Symbol() },
      { text: "Paris", correct: true, id: Symbol() },
      { text: "Dublin", correct: false, id: Symbol() },
    ],
  },
  {
    question: "Who is CEO of Tesla?",
    answers: [
      { text: "Jeff Bezos", correct: false, id: Symbol() },
      { text: "Elon Musk", correct: true, id: Symbol() },
      { text: "Bill Gates", correct: false, id: Symbol() },
      { text: "Tony Stark", correct: false, id: Symbol() },
    ],
  },
  {
    question: "The iPhone was created by which company?",
    answers: [
      { text: "Apple", correct: true, id: Symbol() },
      { text: "Intel", correct: false, id: Symbol() },
      { text: "Amazon", correct: false, id: Symbol() },
      { text: "Microsoft", correct: false, id: Symbol() },
    ],
  },
];

export const QuizScreen = () => {
  const navigate = useNavigate();
  const [quizData, setQuizData] = useState<IQuiz[]>();
  const [score, setScore] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  useEffect(() => {
    setQuizData(quizAPI);
  }, []);

  const handleOption = (correct: boolean) => {
    if (correct) {
      setScore(score + 1);
    }
    if (quizData && currentQuestion + 1 >= quizData?.length) {
      navigate("/results");
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <Container width={500}>
      <Header>
        <span>{currentQuestion + 1}/3</span>
        <span>Certas: {score}</span>
      </Header>
      <h2>{quizData && quizData[currentQuestion].question}</h2>
      <OptionsList>
        {quizData &&
          quizData[currentQuestion].answers.map((option) => (
            <OptionItem
              key={option.text}
              onClick={() => handleOption(option.correct)}
            >
              {option.text}
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
