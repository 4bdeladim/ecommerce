import {createAsyncThunk} from "@reduxjs/toolkit"
import * as api from "../../api/index"
export const signIn = createAsyncThunk(
    'auth/signin',
    async (info, thunkAPI) => {
        try {
            const {email, password} = info
            const response = await api.APIsignIn(email, password)
            return response.data
        } catch (error) {
            throw error.response.data || "Something went wrong"
        }
    }
)   

export const signUp = createAsyncThunk(
    "auth/signup",
    async (info, thunkAPI) => {
        try {
            const {username, email, password} = info
            const response = await api.APIsignUp(username, email, password)
            return response.data
        } catch (error) {
            throw error.response.data || "Something went wrong"
        }
        
    }
)

export const verify = createAsyncThunk(
    "auth/verify",
    async (info, thunkAPI) => {
        try {
            const {email, code} = info
            const response = await api.APIverify(email, code)
            return response.data
        } catch (error) {
            throw error.response.data || "Something went wrong"
        }
    }
)

export const sendRecoveryLink = createAsyncThunk(
    "auth/sendrecovery",
    async (info, thunkAPI) => {
        try {
            const {email} = info
            const response = await api.APIsendRecoveryLink(email)
            return response.data
        } catch (error) {
            throw error.response.data || "Something went wrong"
        }
    }
)

export const checkRecoveryLink = createAsyncThunk(
    "auth/checkrecoverylink",
    async (info, thunkAPI) => {
        try {
            const {email, code} = info
            const response = await api.APIcheckRecoveryLink(email, code)
            return response.data
        } catch (error) {
            throw error.response.data || "Something went wrong"
        }
    }
)

export const changePassword = createAsyncThunk(
    "auth/changepassword",
    async (info, thunkAPI) => {
        try {
            const {email, code, password} = info
            const response = await api.APIchangepassword(email, code, password)
            return response.data
        } catch (error) {
            throw error.response.data || "Something went wrong"
        }
    }
)