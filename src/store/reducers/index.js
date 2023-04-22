import {combineReducers} from "redux";
import {moneyReducer} from "./moneyReducer";

export const rootReducer = combineReducers({
    converter : moneyReducer
})
