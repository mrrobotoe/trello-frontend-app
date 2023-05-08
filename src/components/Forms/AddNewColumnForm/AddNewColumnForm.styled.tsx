import { motion } from 'framer-motion';
import styled from 'styled-components';

import { ReactComponent as CloseButtonIcon } from '../../../assets/close.svg';

export const AddNewColumnFormContainer = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding: 8px;
  border-radius: 6px;
  height: max-content;
  background-color: ${(props) => props.theme.colors.slate2};
  box-shadow: 0px 1px 1px #091e4240, 0px 0px 1px #091e424f;
`;

export const AddNewColumnFormInput = styled(motion.input)`
  padding: 4px;
  padding-left: 8px;
  border: none;
  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.slate1};
  box-shadow: rgba(20, 73, 233, 0.16) 0px 0px 0px,
    ${(props) => props.theme.colors.slate9} 0px 0px 0px 3px;
  color: ${(props) => props.theme.colors.slate12};

  &:focus {
    box-shadow: rgba(20, 73, 233, 0.16) 0px 0px 0px,
      ${(props) => props.theme.colors.slate11} 0px 0px 0px 3px;
    outline: ${(props) => props.theme.colors.slate11};
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
