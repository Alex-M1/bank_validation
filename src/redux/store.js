import cardData from "./cardData";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const redusers = combineReducers({
    cardData: cardData
})

const store = createStore(redusers, applyMiddleware(thunk))
export default store