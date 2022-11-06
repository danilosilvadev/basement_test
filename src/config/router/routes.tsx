import * as React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { SignIn } from "../../features/auth/screens/SignIn";

export const RoutesStack = () => {
  return (
    <Center>
      <h1>Quiz App</h1>
      <Routes>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="play" element={<></>} />
      </Routes>
    </Center>
  );
};

const Center = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
