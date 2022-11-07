import { UserContext } from "../../../config/context/user";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Common } from "../../common";
import { getCategories, signIn } from "../services";

interface IForm {
  name: string;
  category: {
    name: string;
    id: number;
  };
}

const {
  Components: { Container },
  hooks: { useApi },
} = Common;

export const SignInScreen = () => {
  const [form, setForm] = useState<IForm>({
    name: "",
    category: { name: "", id: 0 },
  });
  const navigate = useNavigate();
  const [categoriesService, categoriesResponse] = useApi();
  const { setRound } = useContext(UserContext);

  useEffect(() => {
    categoriesService(getCategories());
  }, []);

  useEffect(() => {
    if (categoriesResponse?.categories) {
      setForm((prev) => ({
        ...prev,
        category: categoriesResponse?.categories[0],
      }));
    }
  }, [categoriesResponse]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, name: e.target.value });
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm({
      ...form,
      category: {
        id: Number(e.target.value),
        name: e.target.textContent || "",
      },
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form.category);
    if (form.name) {
      signIn(form.name, form.category.id).then(({ round }) => {
        setRound({
          playerName: form.name,
          id: round.player_id,
          questions: round.questions,
        });
        navigate("/quiz");
      });
    }
  };

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <FormField>
            <Label>Jogador</Label>
            <Input type="text" title="player" onChange={handleNameChange} />
          </FormField>
          <FormField>
            <Label>Categoria</Label>
            <Select
              title="player"
              onChange={handleCategoryChange}
              defaultValue={form?.category?.id}
            >
              {categoriesResponse && (
                <>
                  {categoriesResponse?.categories.map(
                    (category: IForm["category"]) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    )
                  )}
                </>
              )}
            </Select>
          </FormField>
          <SubmitButton type="submit" value="Jogar" />
        </Form>
      </Container>
    </div>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormField = styled.div`
  align-self: stretch;
  margin: 5%;
  display: flex;
`;

const Select = styled.select`
  width: 100%;
`;

const Label = styled.label`
  margin-right: 20px;
  width: 50px;
`;

const SubmitButton = styled.input`
  background: grey;
  border-radius: 3px;
  width: 100px;
  margin-top: 30px;
`;

const Input = styled.input`
  width: 100%;
`;
