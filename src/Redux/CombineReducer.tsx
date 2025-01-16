import { userdetailsreducer } from "./UserDetailsReducer";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    user : userdetailsreducer
})

export default rootReducer