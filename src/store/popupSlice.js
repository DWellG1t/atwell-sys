import { createSlice } from "@reduxjs/toolkit";

// Slice - набор reducers для определенной логики
const popupSlice = createSlice({
    name: 'popup', // просто название slice
    initialState: { // Изначальные состояние *различные состояния, которые мы можем изменять при определенной логике. Можно добавить массив и др.
        active: false,
    },
    reducers: { // сами reducers *функции, изменяющие состояние
        setActive(state, action){ // state - текущее состояние, action - полученный action
            if(action.payload == "false") 
                state.active = false;
            else
                state.active = !state.active; // Этого достаточно для изменения состояния
        },
    }
})

export const { setActive } = popupSlice.actions; // redux-toolkit позволяет экспортировать action при помощи деструкциризации, эти actions можно будет использовать в компонентах при импорте среза
export default popupSlice.reducer; // подключаем к store (именно reducer!!! а не reducers)


