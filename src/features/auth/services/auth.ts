import { request } from "../../../config/axiosConfig";

export const signIn = async (name: string, category: number) => {
  const { data } = await request.post("/questions", {
    player_name: name,
    category_id: category,
  });
  return data;
};

export const getCategories = async () => {
  const { data } = await request.get("/categories");
  return data;
};
