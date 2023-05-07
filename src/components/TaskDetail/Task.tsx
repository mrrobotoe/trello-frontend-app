import { useAppDispatch, useAppSelector } from '@/hooks';
import { getTask, viewTask } from '@/state/features/todos/tasksSlice';

import {
  TaskDetailContainer,
  TaskDetailDescription,
  TaskDetailDescriptionTextArea,
  TaskDetailTitle,
  TaskDetailTitleContainer,
} from './Task.styled';

export const Task = () => {
  const dispatch = useAppDispatch();
  const taskDetail = useAppSelector(getTask);

  if (!taskDetail) {
    return <TaskDetailContainer>No Task to view!</TaskDetailContainer>;
  }

  return (
    <TaskDetailContainer>
      <TaskDetailTitleContainer>
        <TaskDetailTitle>{taskDetail.task.content}</TaskDetailTitle>
        <p style={{ fontSize: '0.8rem' }}>
          in list <strong>{taskDetail.columnName}</strong>
        </p>
      </TaskDetailTitleContainer>
      <TaskDetailDescription>
        <TaskDetailDescriptionTextArea />
      </TaskDetailDescription>
      <button onClick={() => dispatch(viewTask(null))}>Hide</button>
    </TaskDetailContainer>
  );
};
