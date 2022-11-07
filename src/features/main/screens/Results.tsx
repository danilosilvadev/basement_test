import { useApi } from "../../common/hooks";
import { Common } from "../../common";
import { useContext, useEffect, useState } from "react";
import { api } from "../services";
import { UserContext } from "src/config/context/user";
import { useNavigate } from "react-router-dom";

const {
  Components: { Container },
} = Common;

export const ResultsScreen = () => {
  const [results, setResults] = useState<{ score: number; total: number }>({
    score: 0,
    total: 0,
  });
  const [handleResult, resultResponse] = useApi();
  const { round } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    handleResult(api.getResults(round.id));
  }, []);

  useEffect(() => {
    if (resultResponse?.round) {
      setResults({
        score: resultResponse.round.total_correct_answers,
        total: resultResponse.round.total_questions,
      });
    }
  }, [resultResponse]);

  const handleRestartGame = () => {
    navigate("/");
  };

  return (
    <Container>
      <h1>
        Acertou {results.score} de {results.total}
      </h1>
      <button onClick={handleRestartGame}>Novamente</button>
    </Container>
  );
};
