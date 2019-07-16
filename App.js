import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Text>My First Dope App!</Text>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-content: center;
`;
