import {createStore,applyMiddleware,combineReducers} from "redux";
import thunk from "redux-thunk";

const reducers=combineReducers({
})

export const store=createStore(reducers,applyMiddleware(thunk));