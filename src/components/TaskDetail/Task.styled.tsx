import TextareaAutoSize from 'react-textarea-autosize';
import styled from 'styled-components';

export const TaskDetailContainer = styled.article`
  /* display: grid;
  grid-template-rows: 1fr 1fr 1fr; */
  height: 100%;
  gap: 5rem;
  padding: 2rem;
  position: relative;
`;

export const TaskDetailTitleContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const TaskDetailTitle = styled.h3``;

export const TaskDetailDescription = styled.section`
  margin-top: 3rem;
  position: relative;
`;

export const TaskDetailDescriptionTextArea = styled(TextareaAutoSize)`
  padding: 0.6rem;
  border: none;
  resize: none;
  width: 90%;

  &:disabled {
    -webkit-text-fill-color: ${(props) => props.theme.colors.slate12};
    opacity: 1; /* required on iOS */
  }
`;

interface ITaskDetailDescriptionTextAreaHandler {
  isHidden: boolean;
}

export const TaskDetailDescriptionTextAreaHandler = styled.div<ITaskDetailDescriptionTextAreaHandler>`
  position: absolute;
  background-color: transparent;
  opacity: 0;
  height: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  /* display: ${(props) => (props.isHidden ? 'none' : '')}; */
`;
