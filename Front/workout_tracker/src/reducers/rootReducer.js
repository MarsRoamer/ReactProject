import { combineReducers } from "redux";
import { exercises } from "./exercises";
import { session } from "./session";
import { workout } from "./workout";

export const rootReducer = combineReducers({ exercises, session, workout });
