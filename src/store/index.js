// Для создания хранилища
import { configureStore } from "@reduxjs/toolkit";

// Добавляем срез (reducer)
import popupReducer from "./popupSlice";

// В качестве параметра - хранилище с reduces
export default configureStore({
    reducer: {
        popup: popupReducer, // добавляем slice в хранилище
    }

})


