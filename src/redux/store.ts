import { configureStore } from "@reduxjs/toolkit"
import sectionReducer from "./slices/section"

export const store = configureStore({
    reducer: {
        section: sectionReducer
    }
})