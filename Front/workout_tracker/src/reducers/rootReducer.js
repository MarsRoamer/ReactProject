import { combineReducers } from "redux";
import { exercises } from "./exercises";
import { session } from "./session";

export const rootReducer = combineReducers({ exercises, session });
