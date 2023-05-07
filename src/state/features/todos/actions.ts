import { Action, ActionType, StateType } from 'types';

export const addTodo = (columnId: string, task: string): Action => ({
  type: ActionType.Add,
  payload: {
    columnId,
    task,
  },
});

// export const moveItem = (result: DropResult): Action => ({
//   type: ActionType.Move,
//   payload: result;
// })

export const editTitleChange = (columnId: string, title: string): Action => ({
  type: ActionType.EditTitle,
  payload: {
    columnId,
    title,
  },
});

export const addNewColumn = (title: string): Action => ({
  type: ActionType.AddColumn,
  payload: {
    title,
  },
});

export const setTodos = (todos: StateType): Action => ({
  type: ActionType.SetTodos,
  payload: {
    todos,
  },
});

export const editTodo = (taskId: string, content: string): Action => ({
  type: ActionType.EditTodo,
  payload: {
    taskId,
    content,
  },
});

export const deleteTodo = (index: string, columnId: string): Action => ({
  type: ActionType.DeleteTodo,
  payload: {
    index,
    columnId,
  },
});

export const deleteColumn = (columnId: string): Action => ({
  type: ActionType.DeleteColumn,
  payload: {
    columnId,
  },
});
