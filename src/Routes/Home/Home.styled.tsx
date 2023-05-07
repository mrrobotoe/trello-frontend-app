import styled from 'styled-components';

import { device } from 'device';

export const HomeContainer = styled.section`
  display: flex;
  overflow: auto;
  padding: 0.5rem;

  @media ${device.tablet} {
    padding: 0.5rem;
  }
`;
