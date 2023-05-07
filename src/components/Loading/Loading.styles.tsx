import styled, { keyframes } from 'styled-components';

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  } 100% {
    transform: rotate(360deg);
  }
`;

export const LoadingIcon = styled.span`
  border: ${(props) => `8px solid ${props.theme.colors.slate4}`};
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  border-top-color: ${(props) => props.theme.colors.slate9};
  animation: ${rotate} 1s ease-in-out infinite;
  transform: translateZ(0);
`;
