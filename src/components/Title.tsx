import React from "react";
import styled from "styled-components";
import { Header } from "semantic-ui-react";

const HeadTitle = styled(Header)`
  font-family: Montserrat !important;
  & > i {
    margin-bottom: 20px !important;
  }
`;

const Title = (props: any) => {
  const { children, ...restProps } = props;
  return <HeadTitle {...restProps}>{children}</HeadTitle>;
};

export default Title;
