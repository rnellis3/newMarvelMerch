import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 10px 0px;
  position: sticky;
  background-color: #444644;
	top: 0;
  z-index: 1000
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: white;
  text-decoration: none;
  font-size: 1.5rem
`;

