import { request } from "../../../config/axiosConfig";

const getResults = async (id: number) => {
  const { data } = await request.get(`/rounds/${id}/result`);
  return data;
};

const postAnswer = async (id: number, answerId: number) => {
  const { data } = await request.post(`/rounds/${id}/answers`, {
    answerId,
  });
  return data;
};

export const api = { getResults, postAnswer };
