import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(253, 163, 163, 0.9);
  padding: 0px 60px;
  z-index: 1;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  margin-left: 1em;
`;
