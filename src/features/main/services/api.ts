import { request } from "../../../config/axiosConfig";

const getResults = async (id: number) => {
  const { data } = await request.get(`/rounds/${id}/result`);
  return data;
};

interface IPostAnswer {
  roundId: number;
  questionId: number;
  answerId: number;
}

const postAnswer = async ({ roundId, answerId, questionId }: IPostAnswer) => {
  const { data } = await request.post(`/rounds/${roundId}/answers`, {
    answer: {
      option_id: answerId,
      question_id: questionId,
    },
  });
  return data;
};

export const api = { getResults, postAnswer };
