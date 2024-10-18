// src/Features/Auth/AuthSlice.jsx
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Login user
export const loginUser = createAsyncThunk('auth/login', async (credentials) => {
    const response = await axios.post('/v1/login', credentials); // Adjust the endpoint as necessary
    return response.data;
});

// Fetch user profile
export const fetchProfile = createAsyncThunk('auth/fetchProfile', async () => {
    const response = await axios.get('/v1/profile'); // Adjust the endpoint as necessary
    return response.data;
});

// Update user profile
export const updateProfile = createAsyncThunk('auth/updateProfile', async (profileData) => {
    const response = await axios.put('/v1/profile', profileData); // Adjust the endpoint as necessary
    return response.data;
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload; // Set user data on successful login
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Login failed';
            })
            .addCase(fetchProfile.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(fetchProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch profile';
            })
            .addCase(updateProfile.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload; // Update the user data
            })
            .addCase(updateProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to update profile';
            });
    },
});

// Export actions and reducer
export const { logout } = authSlice.actions; // Only one export for `logout`
// export { loginUser, fetchProfile, updateProfile }; // Export the necessary functions
export default authSlice.reducer; // Default export of the reducer
