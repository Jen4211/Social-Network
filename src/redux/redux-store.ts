import { combineReducers, createStore } from "redux";
import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReduser";
import { StoreType } from "./state";


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

const store: StoreType = createStore(reducers);

export default store;