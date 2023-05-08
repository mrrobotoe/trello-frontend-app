import { motion } from 'framer-motion';
import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';

import { device } from 'device';

import { ReactComponent as CloseButtonIcon } from '../../../assets/close.svg';

export const AddNewCardContainer = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 9px;
  border-radius: 6px;
  height: max-content;
`;

export const TextAreaContainer = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.slate1};
  padding: 4px 8px 4px 5px;
  border-radius: 3px;
  box-shadow: inset 0 0 0 2px ${(props) => props.theme.colors.slate10};

  @media ${device.laptop} {
    padding: 4px 8px 4px 10px;
  }
`;

export const AddNewCardFormInput = styled(TextareaAutosize)`
  resize: vertical;
  width: 100%;
  outline: none;
  border: none;
  font-size: 0.9rem;
  resize: vertical;
  background-color: ${(props) => props.theme.colors.slate1};
  color: ${(props) => props.theme.colors.slate12};
  &:focus {
    outline: none;
  }
`;

export const CloseButton = styled(CloseButtonIcon)`
  stroke: ${(props) => props.theme.colors.slate10};
  transition: all 250ms ease-in;
  cursor: pointer;
  &:hover {
    stroke: ${(props) => props.theme.colors.slate12};
    transform: scale(1.1);
  }
`;
export const ButtomContainer = styled(motion.div)`
  display: flex;
  gap: 5px;
  align-items: center;
`;
