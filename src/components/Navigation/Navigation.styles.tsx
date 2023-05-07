import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { device } from 'device';

export const NavigationContainer = styled.nav`
  order: 2;
  padding: 0;
  margin: 0;
  display: flex;
  background-color: ${(props) => props.theme.colors.slate2};
  @media ${device.tablet} {
    order: 0;
  }
`;

export const LinksContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  margin: auto 0;
  text-align: center;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }
`;

export const Link = styled(NavLink)`
  margin: 0;
  padding: 1rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors.slate12};
  transition: all 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
  text-decoration: none;

  &.active {
    background-color: ${(props) => props.theme.colors.slate5};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.slate4};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.slate5};
  }
`;
