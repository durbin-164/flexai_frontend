import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../models/User';
import { APIEndpointEnum, AuthProviderEnum } from '../../constant/enums';

interface Provider{
  provider: string;
}

export interface LoginDataInternal extends Provider{
  email: string;
  password: string;
}

export interface LoginDataExternal extends Provider{
  token: string;
}


export interface SignupDataInternal extends Provider{
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface SignupDataExternal extends Provider{
  token: string;
}


export const loginUser = createAsyncThunk(
  'user/login',
  async (userData: LoginDataInternal | LoginDataExternal, { rejectWithValue }) => {
    try {

        let response;

        if(userData.provider === AuthProviderEnum.INTERNAL){
          userData = userData as LoginDataInternal

          const formData = new FormData();
          formData.append('username', userData.email);
          formData.append('password', userData.password);

          response = await axios.post(APIEndpointEnum.LOGING_INTERNAL, formData,  {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },});
          
        }else{
            response = await axios.post(APIEndpointEnum.LOGIN_EXTERNAL, userData,  {
              headers: {
                'Content-Type': 'application/json',
              },});

        }
      
        const user_me_response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/auth/me`, {
          headers: {
            'Authorization': `Bearer ${response?.data.access_token}`,
          },
        });


        const user: User ={
          firstName: user_me_response.data.first_name,
          lastName:user_me_response.data.last_name,
          email:user_me_response.data.email,
          accessToken: response?.data.access_token,
          refreshToken: response?.data.refresh_token
      }

      return user;
    } catch (error) {
      console.log(error)
      if (axios.isAxiosError(error)) {
        let message = error.response?.data.detail
        if (typeof message !== "string"){
          message = 'An error occurred during login'
        }
          return rejectWithValue(message);
      }
      const message = error instanceof Error ? error.message : 'An unknown error occurred during login';
      return rejectWithValue(message);
    }
  }
);



export const signupUser = createAsyncThunk(
  'user/signup',
  async (userData: SignupDataInternal | SignupDataExternal, { rejectWithValue , dispatch}) => {
    try {


      const singup_url =  userData.provider === AuthProviderEnum.INTERNAL? APIEndpointEnum.SIGNUP_INTERNAL : APIEndpointEnum.SIGNUP_EXTERNAL
      await axios.post(singup_url, userData);

      let loginData;

      if(userData.provider === AuthProviderEnum.INTERNAL){
        userData = userData as SignupDataInternal
         loginData ={
          provider: userData.provider,
          email: userData.email,
          password: userData.password
        }
      }else{
        loginData = userData
      }

      const loginReponse =  await dispatch(loginUser(loginData))
      return loginReponse.payload
      
    } catch (error) {
        console.log(error)
        if (axios.isAxiosError(error)) {
            let message= error.response?.data.detail
            if (typeof message !== "string"){
              message = 'An error occurred during Signup'
            }

            return rejectWithValue(message);
        }
        const message = error instanceof Error ? error.message : 'An unknown error occurred during Signup';
        return rejectWithValue(message);
    }
  }
);


interface UserState {
    loading: boolean;
    user: User | null;
  }

const initialState: UserState = {
  loading: true, // You may set it to true initially if you want to show a loading state before API calls
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.loading = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true; // Set loading to true when the login request is pending
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false; // Set loading to false when the login request is fulfilled
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false; // Set loading to false when the login request is rejected
        
      })
      .addCase(signupUser.pending, (state) => {
        state.loading = true; // Set loading to true when the signup request is pending
      })
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
