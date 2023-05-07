import styled from 'styled-components';

export const TaskDetailContainer = styled.article`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  height: 100%;
  gap: 5rem;
  padding: 2rem;
`;

export const TaskDetailTitleContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const TaskDetailTitle = styled.h3``;

export const TaskDetailDescription = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const TaskDetailDescriptionTextArea = styled.textarea``;
