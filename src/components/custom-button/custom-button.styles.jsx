import styled, { css } from "styled-components";

const BlackStyle = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
const InvertedStyle = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
const GoogleStyle = css`
  background-color: rgb(219, 84, 84);
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: rgb(219, 84, 84);
    border: 1px solid rgb(219, 84, 84);
  }
`;

export const CustomButtonContainer = styled.button`
  min-width: 40%;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border-radius: 3px;
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;

  ${(props) => (props.BlackStyle ? BlackStyle : "")}
  ${(props) => (props.GoogleStyle ? GoogleStyle : "")}
  ${(props) => (props.InvertedStyle ? InvertedStyle : "")}
`;
