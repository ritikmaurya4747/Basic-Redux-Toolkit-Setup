import { configureStore } from "@reduxjs/toolkit";
import  showData  from "../Features/showSlice";

export const store = configureStore({
    reducer: {
        show : showData
    }
});