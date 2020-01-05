import React from "react";
import { Header } from "semantic-ui-react";
import styled from "styled-components";

const Separator = styled.div`
  &:after {
    content: "";
    position: relative;
    top: 6px;
    display: block;
    margin: auto;
    height: 2px;
    width: 90px;
    background-color: #333;
  }
`;

interface Props {
  children: any;
}

function MainTitle({ children }: Props) {
  return (
    <Header as="h1">
      <Separator>{children}</Separator>
    </Header>
  );
}

export default MainTitle;
