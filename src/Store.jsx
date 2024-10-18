import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Features/Auth/AuthSlice.jsx';
import projectReducer from './Features/Projects/ProjectSlice.jsx';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        projects: projectReducer,
    },
});
