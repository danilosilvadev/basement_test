import * as React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Screens } from "../../features";

export const RoutesStack = () => {
  return (
    <Center>
      <Title>Quiz App</Title>
      <Routes>
        <Route path="/" element={<Screens.Auth.SignInScreen />} />
        <Route path="quiz" element={<Screens.Main.QuizScreen />} />
        <Route path="results" element={<Screens.Main.ResultsScreen />} />
      </Routes>
    </Center>
  );
};

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  position: fixed;
  top: 50px;
`;

const Center = styled.section`
  margin: 0 auto;
  font-family: helvetica;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
