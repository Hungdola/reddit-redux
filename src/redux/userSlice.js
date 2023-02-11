import { createSlice } from "@reduxjs/toolkit";
import images from "../assets/images";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: "hung tran",
        age: "20",
        about: "yêu tất cả các em xinh gái",
        avaUrl: images.img4,
        themeColor: "#78e222",
        pending: false, 
        error: false, 
    },
    reducers: {
        updateStart: (state) => {
            state.pending = true 
        },

        updateError: (state) => {
            state.pending = false
            state.error = true
        },

        updateSuccess: (state, action) => {
            state.pending = false
            state.error = false
            state.name = action.payload.name
            state.age = action.payload.age
            state.about = action.payload.about
            state.avaUrl = action.payload.avaUrl
            state.themeColor = action.payload.themeColor
        }
    }
})

export const {updateStart, updateError, updateSuccess} = userSlice.actions
export default userSlice.reducer 