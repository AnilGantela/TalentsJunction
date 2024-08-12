import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const NavContainer = styled.div`
  height: 90px;
  margin: 0px;
  width: 100%;
  display: flex;
  padding-top: 0px;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  align-self: center;
  border-bottom: 2px solid #ffffff;
`;

export const NavLinkContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  text-decoration: none;
  width: 50%;
`;

export const NavLink = styled.li`
  text-decoration: none;
  list-style: none;
  color: #ffffff;
  font-weight: 700;
  font-size: 20px;
`;

export const NavImage = styled.img`
  height: 50px;
  margin: 0px;
  width: 200px;
`;
