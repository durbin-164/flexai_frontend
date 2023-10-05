export enum ThemeModeEnum {
    Light= "light",
    Dark = "dark"

  }

  export enum AuthProviderEnum {
    INTERNAL = "INTERNAL",
    GOOGLE = "GOOGLE"
  }
  

export const APIEndpointEnum = {
    LOGING_INTERNAL : `${process.env.REACT_APP_BACKEND_URL}/auth/token`,
    LOGIN_EXTERNAL : `${process.env.REACT_APP_BACKEND_URL}/auth/token-external`,
    SIGNUP_INTERNAL : `${process.env.REACT_APP_BACKEND_URL}/auth/signup`,
    SIGNUP_EXTERNAL : `${process.env.REACT_APP_BACKEND_URL}/auth/signup-external`
} 