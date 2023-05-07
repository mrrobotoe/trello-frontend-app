import styled from 'styled-components';

import { device } from 'device';

export const ModalContainer = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  width: 100%;
  height: 100%;
  background-color: #11121ac4;
  display: grid;
  place-items: center;
`;

export const ModalComponent = styled.div`
  height: 50vh;
  width: 95vw;
  border-radius: 6px;
  display: grid;
  background-color: ${(props) => props.theme.colors.slate3};

  @media ${device.tablet} {
    min-height: 50rem;
    width: 50rem;
  }
`;
