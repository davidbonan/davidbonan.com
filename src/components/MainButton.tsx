import React from "react";
import { Header } from "semantic-ui-react";
import styled from "styled-components";

const MyCV = styled.a`
  display: inline-block;
  color: #fff;
  background-color: #d20068;
  height: 42px;
  text-decoration: none;
  padding: 12px 40px 12px 40px;
  margin: 23px 8px 6px 8px;
  min-width: 88px;
  border-radius: 3px;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  outline: none;
  border-radius: 20px;
  transition-property: all;
  transition-duration: 400ms;
  letter-spacing: 1px;
  font-weight: 200;
  cursor: pointer;
  & :hover {
    color: #333;
    text-decoration: none;
    background-color: #fff;
    font-weight: 400;
    padding: 12px 60px 12px 60px;  
    box-shadow: 0 0 1px 7px rgba(210,0,104,.15);

  }
`;

interface Props {
  children: any;
}

function MainButton({ children }: Props) {
  return (
    <MyCV href="/static/CV.png" target="_blank" >
      {children}
    </MyCV>
  );
}

export default MainButton;
