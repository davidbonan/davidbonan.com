import React from "react";
import { Grid } from "semantic-ui-react";
import styled from "styled-components";

const Column = styled(Grid.Column)`
  padding: 0.75rem;
`;

const Container = styled(Grid.Column)`
  height: 100%;
  background-color: #fff;
  border-radius: 6px;
  transition: box-shadow ease .3s;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1) !important;
  color: #4a4a4a;
  padding: 1.25rem;

  & :hover {
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.3), 0 0 0 1px rgba(10, 10, 10, 0.1) !important;
  }
`;

interface Props {
  children: any;
}

const CardGridColumn = ({ children }: Props) => (
  <Column>
    <Container>{children}</Container>
  </Column>
);

export default CardGridColumn;
