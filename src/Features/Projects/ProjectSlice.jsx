import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch projects
export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
    const response = await axios.get('/v1/admin/project');
    return response.data;
});

// Create a slice for project management
const projectSlice = createSlice({
    name: 'projects',
    initialState: { list: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProjects.fulfilled, (state, action) => {
            state.list = action.payload;
        });
    },
});

export default projectSlice.reducer;
