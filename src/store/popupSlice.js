import { createSlice } from "@reduxjs/toolkit";

// Slice - набор reducers для определенной логики
const popupSlice = createSlice({
    name: 'popup', // просто название slice
    initialState: { // Изначальные состояние *различные состояния, которые мы можем изменять при определенной логике. Можно добавить массив и др.
        popupActive: false,
        orderText: "Заявка на консультацию",
    },
    reducers: { // сами reducers *функции, изменяющие состояние
        setActivePopup(state, action){ // state - текущее состояние, action - полученный action
            if(action.payload == "false") 
            {
                state.popupActive = false;
                state.orderText = "Заявка на консультацию";
            }
            else {
                state.popupActive = !state.popupActive; // Этого достаточно для изменения состояния
                if (action.payload != "")
                    state.orderText = action.payload;
            }
                
        },
    }
})

export const { setActivePopup } = popupSlice.actions; // redux-toolkit позволяет экспортировать action при помощи деструкциризации, эти actions можно будет использовать в компонентах при импорте среза
export default popupSlice.reducer; // подключаем к store (именно reducer!!! а не reducers)


