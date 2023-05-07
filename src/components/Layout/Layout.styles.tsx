import styled from 'styled-components';

import { device } from '../../../device';

export const LayoutContainer = styled.main`
  background-color: ${(props) => props.theme.colors.slate8};
  height: 100svh;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr minmax(3rem, 4rem);

  @media ${device.tablet} {
    grid-template-columns: max-content 1fr;
    grid-template-rows: none;
  }
`;
