import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { api } from '../api/api'
import authReducer from './features/authSlice'
import taskReducer from './features/taskSlice'
import { notificationMiddleware } from './middlewares/notificationMiddleWare'
export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        auth: authReducer,
        tasks: taskReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(api.middleware)
            .concat(notificationMiddleware),
});

setupListeners(store.dispatch);
