import { createSlice } from "@reduxjs/toolkit";
import { create } from "domain";

// Slice - набор reducers для определенной логики
const mobileSlice = createSlice({
    name: 'mobile', // просто название slice
    initialState: { // Изначальные состояние *различные состояния, которые мы можем изменять при определенной логике. Можно добавить массив и др.
        mobileActive: false,
    },
    reducers: { // сами reducers *функции, изменяющие состояние
        setActiveMobile(state, action){ // state - текущее состояние, action - полученный action
            // console.log("hello")
            if(action.payload == "false") 
                state.mobileActive = false;
            else
                state.mobileActive = !state.mobileActive; // Этого достаточно для изменения состояния
        },
    }
})

export const { setActiveMobile } = mobileSlice.actions; // redux-toolkit позволяет экспортировать action при помощи деструкциризации, эти actions можно будет использовать в компонентах при импорте среза
export default mobileSlice.reducer; // подключаем к store (именно reducer!!! а не reducers)
