import { usersReducer } from './usersReducer';
import { combineReducers, createStore } from "redux";
import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";



const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

export type AppStateType = ReturnType<typeof reducers>

const store = createStore(reducers);

export default store;