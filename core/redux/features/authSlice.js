import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    token: localStorage.getItem('token') || null,
    refreshToken: null,
    isAuthenticated: !!localStorage.getItem('token') && localStorage.getItem('token') !== '' && localStorage.getItem('token') !== undefined,

}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, { payload }) => {
            state.user = payload.data.user
            state.token = payload.data.authToken
            state.refreshToken = payload.data.refreshToken
            state.isAuthenticated = true
            localStorage.setItem('token', payload.data.authToken)
            localStorage.setItem('refreshToken', payload.data.refreshToken)
        },
        logout: (state) => {
            state.user = null
            state.token = null
            state.isAuthenticated = false
            localStorage.removeItem('token')
            localStorage.removeItem('refreshToken');
        },
    },
})

export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer
