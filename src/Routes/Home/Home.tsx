import { DragDropContext, DropResult, Droppable } from '@hello-pangea/dnd';
import React from 'react';

import { AddNewColumnButton } from '@/components/Buttons/Buttons.styled';
import { ColumnsList } from '@/components/ColumnList/ColumnList';
import { ColumnWrapper } from '@/components/ColumnWrapper/ColumnWrapper.styled';
import { AddNewColumnForm } from '@/components/Forms/AddNewColumnForm';
import { Modal } from '@/components/Modal';
import { ModalComponent } from '@/components/Modal/Modal.styled';
import { Task } from '@/components/TaskDetail/Task';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getTask, moveItem } from '@/state/features/todos/tasksSlice';

import { HomeContainer } from './Home.styled';

export const Home = () => {
  const [showForm, toggleForm] = React.useState(false);

  const dispatch = useAppDispatch();

  const onDragStart = () => {
    if (window.navigator.vibrate) {
      window.navigator.vibrate(200);
    }
  };

  const onDragEnd = (result: DropResult) => {
    dispatch(moveItem(result));
  };

  const showModal = useAppSelector(getTask);

  return (
    <>
      {showModal && (
        <Modal>
          <ModalComponent>
            <Task />
          </ModalComponent>
        </Modal>
      )}

      <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <HomeContainer>
          <Droppable droppableId="cols" direction="horizontal" type="column">
            {(provided, snapshot) => (
              <ColumnsList
                placeholder={provided.placeholder}
                {...provided.droppableProps}
                ref={provided.innerRef}
                snapshot={snapshot}
              />
            )}
          </Droppable>
          <ColumnWrapper>
            {!showForm ? (
              <AddNewColumnButton onClick={() => toggleForm(true)} dark>
                + Add New List
              </AddNewColumnButton>
            ) : (
              <AddNewColumnForm key={'toggle'} toggleForm={() => toggleForm(false)} />
            )}
          </ColumnWrapper>
        </HomeContainer>
      </DragDropContext>
    </>
  );
};
