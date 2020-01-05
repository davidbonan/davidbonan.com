import React from "react";
import { Header } from "semantic-ui-react";
import styled from "styled-components";

const Subtitle = styled.span`
  font-family: Montserrat;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.2em;
  text-transform: uppercase;
`;

interface Props {
  children: any;
}

function MainSubtitle({ children }: Props) {
  return (
    <Header as="h2">
      <Subtitle>{children}</Subtitle>
    </Header>
  );
}

export default MainSubtitle;
