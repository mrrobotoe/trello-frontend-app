import { Draggable, Droppable, DroppableStateSnapshot } from '@hello-pangea/dnd';
import React from 'react';

import { useAppDispatch } from '@/hooks';
import { listNameChange } from '@/state/features/todos/tasksSlice';
import { TColumn, TTask } from 'types';

import { AddNewCardButton } from '../Buttons/Buttons.styled';
import { CardList } from '../CardList';
import { AddNewCardForm } from '../Forms/AddNewCardForm';

import {
  ColumnContainer,
  ColumnComponent,
  ColumnTitle,
  ColumnTitleContainer,
  ColumnTextArea,
  ColumnBottomContainer,
} from './Column.styled';

interface Props {
  column: TColumn;
  tasks: Array<TTask>;
  index: number;
  snapshot: DroppableStateSnapshot;
  children?: React.ReactNode;
}
export const Column: React.FC<Props> = (props) => {
  const [editTarget, toggleEditTarget] = React.useState(false);
  const [showForm, setShowForm] = React.useState(false);
  const inputElement = React.useRef<HTMLTextAreaElement>(null);
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  });

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    document.addEventListener('touchstart', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
      document.addEventListener('touchstart', handleClickOutside, true);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as HTMLElement)) {
      toggleEditTarget(false);
    }
  };

  return (
    <Draggable draggableId={props.column.id} index={props.index}>
      {(provided, snapshot) => (
        <ColumnContainer
          key={props.column.id}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <ColumnComponent ref={wrapperRef} isDragging={snapshot.isDragging}>
            <ColumnTitleContainer>
              <ColumnTitle
                onClick={() => toggleEditTarget(true)}
                isHidden={editTarget}
              ></ColumnTitle>
              <ColumnTextArea
                value={props.column.title}
                ref={inputElement}
                aria-label="column"
                spellCheck={false}
                disabled={!editTarget}
                onBlur={() => toggleEditTarget(false)}
                onChange={(e) =>
                  dispatch(listNameChange({ id: props.column.id, newTitle: e.target.value }))
                }
                maxLength={512}
              />
            </ColumnTitleContainer>
            <Droppable droppableId={props.column.id} type="card" direction="vertical">
              {(provided, snapshot) => {
                return (
                  <>
                    <CardList
                      ref={provided.innerRef}
                      placeholder={provided.placeholder}
                      {...provided.droppableProps}
                      columnId={props.column.id}
                      tasks={props.tasks}
                    />
                  </>
                );
              }}
            </Droppable>
            <ColumnBottomContainer>
              {!showForm ? (
                <AddNewCardButton onClick={() => setShowForm(true)}>
                  + Add New Card
                </AddNewCardButton>
              ) : (
                <AddNewCardForm columnId={props.column.id} showForm={() => setShowForm(false)} />
              )}
            </ColumnBottomContainer>
          </ColumnComponent>
        </ColumnContainer>
      )}
    </Draggable>
  );
};
