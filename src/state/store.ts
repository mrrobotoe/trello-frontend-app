import { configureStore } from '@reduxjs/toolkit';

import themesReducer from './features/themes/themesSlice';
import tasksReducer from './features/todos/tasksSlice';

export const store = configureStore({
  reducer: {
    todos: tasksReducer,
    themes: themesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
