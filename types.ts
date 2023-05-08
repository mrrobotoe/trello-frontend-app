export type TTask = {
  id: string;
  content: string;
  label?: Array<string>;
  completedBy?: string;
  owner?: string;
  creator?: string;
  description?: string;
};

export type TColumn = {
  id: string;
  title: string;
  taskIds: Array<string>;
};

export enum ActionType {
  Add = 'ADD',
  Move = 'MOVE',
  EditTitle = 'EDIT',
  AddColumn = 'ADD_COLUMN',
  DeleteColumn = 'DELETE_COLUMN',
  SetTodos = 'SET_TASKS',
  EditTodo = 'EDIT_TASK',
  DeleteTodo = 'DELETE_TASK',
}

export type StateType = {
  tasks: Record<string, TTask>;
  columns: Record<string, TColumn>;
  columnOrder: Array<string>;
  taskToView: null | {
    task: TTask;
    columnName: string;
  };
  userId: string;
};

export type Action =
  | {
      type: ActionType.Add;
      payload: {
        task: string;
        columnId: string;
      };
    }
  | {
      type: ActionType.Move;
      // payload: DropResult;
    }
  | {
      type: ActionType.EditTitle;
      payload: {
        columnId: string;
        title: string;
      };
    }
  | {
      type: ActionType.AddColumn;
      payload: {
        title: string;
      };
    }
  | {
      type: ActionType.SetTodos;
      payload: {
        todos: StateType;
      };
    }
  | {
      type: ActionType.EditTodo;
      payload: {
        taskId: string;
        content: string;
      };
    }
  | {
      type: ActionType.DeleteTodo;
      payload: {
        index: string;
        columnId: string;
      };
    }
  | {
      type: ActionType.DeleteColumn;
      payload: {
        columnId: string;
      };
    };
