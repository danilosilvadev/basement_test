import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface IForm {
  name: string;
  category: string;
}

export const SignInScreen = () => {
  const [form, setForm] = useState<IForm>({ name: "", category: "" });
  const navigate = useNavigate();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, name: e.target.value });
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm({ ...form, category: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    navigate("/quiz");
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
            <Select title="player" onChange={handleCategoryChange}>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </Select>
          </FormField>
          <SubmitButton type="submit" value="Jogar" />
        </Form>
      </Container>
    </div>
  );
};

const Container = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
  justify-content: center;
  color: black;
  padding: 50px;
`;

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
