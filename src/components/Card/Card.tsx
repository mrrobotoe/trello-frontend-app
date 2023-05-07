import { Draggable } from '@hello-pangea/dnd';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { getColumnName, viewTask } from '@/state/features/todos/tasksSlice';
import { TTask } from 'types';

import {
  CardContainer,
  CardTitleContainer,
  CardTopContainer,
  CardBottomContainer,
} from './Card.styled';

type TCardProps = {
  task: TTask;
  index: number;
  columnId: string;
};

export const Card = (props: TCardProps) => {
  const dispatch = useAppDispatch();

  const columnName = useAppSelector((state) => getColumnName(state, props.columnId));
  return (
    <Draggable key={props.task.id} draggableId={props.task.id} index={props.index}>
      {(provided, snapshot) => (
        <CardContainer
          onClick={() => dispatch(viewTask({ task: props.task, columnName }))}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <CardTopContainer></CardTopContainer>
          <CardTitleContainer>{props.task.content}</CardTitleContainer>
          <CardBottomContainer></CardBottomContainer>
        </CardContainer>
      )}
    </Draggable>
  );
};
