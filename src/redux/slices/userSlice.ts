import { CaseReducer, createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import { User } from '../models/User';

export interface LoginData {
  username: string;
  password: string;
}

export interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ApiError {
  type: 'api';
  message: string;
}

export const loginUser = createAsyncThunk<User, LoginData, { state: RootState }>(
  'user/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append('username', credentials.username);
      formData.append('password', credentials.password);

      const response = await axios.post('http://localhost:8080/user/token', formData,  {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // Set the appropriate content type
        },});

        const user_me_response = await axios.get('http://localhost:8080/user/me', {
          headers: {
            'Authorization': `Bearer ${response.data.access_token}`,
          },
      });


        const user: User ={
          firstName: user_me_response.data.first_name,
          lastName:user_me_response.data.last_name,
          email:credentials.username,
          accessToken: response.data.access_token,
          refreshToken: response.data.refresh_token
      }

      return user;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const apiError: ApiError = {
          type: 'api',
          message: error.response?.data.message || 'An error occurred during login',
        };
        return rejectWithValue(apiError);
      }
      // If the error is not an AxiosError, we'll handle it here.
      const unknownError: ApiError = {
        type: 'api',
        message: error instanceof Error ? error.message : 'An unknown error occurred during login',
      };
      return rejectWithValue(unknownError);
    }
  }
);

export const signupUser = createAsyncThunk<User, SignupData, { state: RootState }>(
  'user/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const userRequestData = {
        "username": userData.email,
        "password": userData.password,
        "first_name": userData.firstName,
        "last_name": userData.lastName

      }
      const response = await axios.post('http://localhost:8080/user/signup', userRequestData);
      
      const formData = new FormData();
      formData.append('username', userData.email);
      formData.append('password', userData.password);

      const token_response = await axios.post('http://localhost:8080/user/token', formData,  {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // Set the appropriate content type
        },});

      const user: User ={
          firstName: userData.firstName,
          lastName:userData.lastName,
          email:userData.email,
          accessToken: token_response.data.access_token,
          refreshToken: token_response.data.refresh_token
      }

      return user;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const apiError: ApiError = {
          type: 'api',
          message: error.response?.data.message || 'An error occurred during signup',
        };
        return rejectWithValue(apiError);
        // throw apiError
      }
      // If the error is not an AxiosError, we'll handle it here.
      const unknownError: ApiError = {
        type: 'api',
        message: error instanceof Error ? error.message : 'An unknown error occurred during signup',
      };
      return rejectWithValue(unknownError);
      // throw unknownError
    }
  }
);

interface UserState {
    loading: boolean;
    user: User | null;
    apiError: ApiError | null;
  }

const initialState: UserState = {
  loading: true, // You may set it to true initially if you want to show a loading state before API calls
  user: null,
  apiError: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.loading = false;
      state.user = null;
      state.apiError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true; // Set loading to true when the login request is pending
        state.apiError = null; // Reset apiError when a new login request is initiated
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false; // Set loading to false when the login request is fulfilled
        state.user = action.payload;
        state.apiError = null; // Reset apiError when the login is successful
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false; // Set loading to false when the login request is rejected
        if (action.payload) {
          state.apiError = action.payload as ApiError;
        }
      })
      .addCase(signupUser.pending, (state) => {
        state.loading = true; // Set loading to true when the signup request is pending
        state.apiError = null; // Reset apiError when a new signup request is initiated
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false; // Set loading to false when the signup request is fulfilled
        state.user = action.payload;
        state.apiError = null; // Reset apiError when the signup is successful
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false; // Set loading to false when the signup request is rejected
        if (action.payload) {
          state.apiError = action.payload as ApiError;
        }
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
