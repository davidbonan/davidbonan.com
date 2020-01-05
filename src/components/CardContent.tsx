import React from "react";
import styled from "styled-components";

const Paragraph = styled.p`
  font-size: 1em !important;
`;

interface Props {
  children: any;
}

const CardContent = ({ children }: Props) => <Paragraph>{children}</Paragraph>;

export default CardContent;
