import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

// import type { PayloadAction } from "@reduxjs/toolkit";

import { RootState } from '@/state/store';
import { StateType } from 'types';

const initialState: StateType = {
  tasks: {
    'task-1': {
      id: 'task-1',
      content: 'Learn Typescript',
      owner: 'Alan Smith',
    },
    'task-2': { id: 'task-2', content: 'Understand React rules' },
    'task-3': { id: 'task-3', content: 'Download Node JS' },
    'task-4': {
      id: 'task-4',
      content: 'Download VS Code',
      description: 'Need to figure out what OS is best to use VS Code with.',
    },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'TO DO',
      taskIds: ['task-1', 'task-2'],
    },
    'column-2': {
      id: 'column-2',
      title: 'IN PROGRESS',
      taskIds: ['task-3'],
    },
    'column-3': {
      id: 'column-3',
      title: 'DONE',
      taskIds: ['task-4'],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
  taskToView: null,
  userId: '',
};

export const tasksSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    taskAdded(state, action) {
      const taskName: string = nanoid();
      state.tasks[`task-${taskName}`] = {
        id: `task-${taskName}`,
        content: action.payload.content,
      };
      state.columns[action.payload.columnId].taskIds.push(`task-${taskName}`);
      return;
    },
    listAdded(state, action) {
      const listId: string = nanoid();
      state.columnOrder.push(`column-${listId}`);
      state.columns[`column-${listId}`] = {
        id: `column-${listId}`,
        title: action.payload.title,
        taskIds: [],
      };
      return;
    },
    listNameChange(state, action) {
      state.columns[action.payload.id] = {
        ...state.columns[action.payload.id],
        title: action.payload.newTitle,
      };
    },
    moveItem(state, action) {
      const { destination, source, draggableId, type } = action.payload;
      if (!destination) {
        return;
      }

      if (destination.droppableId === source.droppableId && destination.index === source.index) {
        return;
      }

      if (type === 'column') {
        const newColumnOrder = Array.from(state.columnOrder);
        newColumnOrder.splice(source.index, 1);
        newColumnOrder.splice(destination.index, 0, draggableId);

        state.columnOrder = newColumnOrder;
        return;
      }

      const start = state.columns[source.droppableId];
      const finish = state.columns[destination.droppableId];

      if (start === finish) {
        const newTaskIds = Array.from(start.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        const newColumn = {
          ...start,
          taskIds: newTaskIds,
        };

        state.columns[newColumn.id].taskIds = newTaskIds;
        return;
      }

      const startTaskIds = Array.from(start.taskIds);
      startTaskIds.splice(source.index, 1);
      const newStart = {
        ...start,
        taskIds: startTaskIds,
      };

      const finishTaskIds = Array.from(finish.taskIds);
      finishTaskIds.splice(destination.index, 0, draggableId);

      const newFinish = {
        ...finish,
        taskIds: finishTaskIds,
      };

      state.columns[newStart.id].taskIds = newStart.taskIds;
      state.columns[newFinish.id].taskIds = newFinish.taskIds;
      return;
    },
    viewTask(state, action) {
      state.taskToView = action.payload;
    },
  },
});

export const { taskAdded, listAdded, listNameChange, moveItem, viewTask } = tasksSlice.actions;

export const getTodos = (state: RootState) => state.todos;
export const getTask = (state: RootState) => state.todos.taskToView;
export const getColumnName = (state: RootState, columnId: string) =>
  state.todos.columns[columnId].title;

export default tasksSlice.reducer;
