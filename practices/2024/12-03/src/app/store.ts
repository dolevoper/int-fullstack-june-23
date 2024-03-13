import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import textReducer from "../reducers/textSlice"


export const store = configureStore({
    reducer: {
        text: textReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>