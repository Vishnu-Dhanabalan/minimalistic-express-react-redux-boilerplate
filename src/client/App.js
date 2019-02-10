import React from "react";
import styled from "styled-components";
import "./styles/fonts.css";

const StyledHeader = styled.h1`
  color: red;
  font-family: ReemKufiRegular;
`;

const App = () => {
  return (
    <div>
      <StyledHeader>Hello from React!</StyledHeader>
    </div>
  );
};

export default App;
