import {createSlice} from '@reduxjs/toolkit'
import {RootState} from "../app/store"

export interface TextState {
    value: string
}

const initialState:TextState = {
    value: "Add Text Here...",
}

// const [text, setText] = useState({value: "Add Here..."})

export const textSlice = createSlice({
    name: "text",
    initialState,
    reducers: {
        setText: (state, action) => { 
            state.value = action.payload
        },
        resetText: (state) => {
            state.value = ""
        },
        setTextAsGili: (state) => {
            state.value= "Gili"
        }
    }
})

export const {setText, resetText, setTextAsGili} = textSlice.actions;

export const textSelector = (state:RootState) => state.text.value

export default textSlice.reducer