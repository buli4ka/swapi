import {configureStore} from "@reduxjs/toolkit";
import entitiesReduces from "./entitiesSlice";

export const store = configureStore({
    reducer: {
        entities: entitiesReduces
    }
})