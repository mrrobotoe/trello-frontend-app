import React from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { getTask, viewTask } from '@/state/features/todos/tasksSlice';

import { ReactComponent as CloseButtonIcon } from '../../assets/close.svg';
import { ButtonContainer } from '../Buttons/Buttons.styled';

import {
  TaskDetailContainer,
  TaskDetailDescription,
  TaskDetailDescriptionTextArea,
  TaskDetailTitle,
  TaskDetailTitleContainer,
  TaskDetailDescriptionTextAreaHandler,
} from './Task.styled';

export const Task = () => {
  const dispatch = useAppDispatch();
  const taskDetail = useAppSelector(getTask);
  const [editTarget, toggleEditTarget] = React.useState(true);
  const inputElement = React.useRef<HTMLTextAreaElement>(null);
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  });

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside, false);
    document.addEventListener('touchstart', handleClickOutside, false);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
      document.addEventListener('touchstart', handleClickOutside, true);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as HTMLElement)) {
      toggleEditTarget(true);
    }
  };

  if (!taskDetail) {
    return <TaskDetailContainer>No Task to view!</TaskDetailContainer>;
  }

  return (
    <TaskDetailContainer ref={wrapperRef}>
      <ButtonContainer onClick={() => dispatch(viewTask(null))}>
        <CloseButtonIcon />
      </ButtonContainer>
      <TaskDetailTitleContainer>
        <TaskDetailTitle>{taskDetail.task.content}</TaskDetailTitle>
        <p style={{ fontSize: '0.8rem' }}>
          in list <strong>{taskDetail.columnName}</strong>
        </p>
      </TaskDetailTitleContainer>
      <TaskDetailDescription>
        <h3>Description</h3>
        <TaskDetailDescriptionTextAreaHandler
          isHidden={!editTarget}
          onClick={() => toggleEditTarget(false)}
        />
        <TaskDetailDescriptionTextArea
          ref={inputElement}
          minRows={7}
          maxLength={512}
          disabled={editTarget}
          onBlur={() => toggleEditTarget(true)}
          value={taskDetail.task.description}
        />
      </TaskDetailDescription>
    </TaskDetailContainer>
  );
};
