
import {  sendMessageActionCreator, updateNewMessageTextActionCreator } from './dialogsReducer';
import { addPostActionCreator, updateNewPostTextActionCreator } from './profileReducer';




 type DialogsType = {
    id: string
    name: string
}
 type MessagesType = {
    id?: string
    message: string
}
 type PostsType = {
    id?: string
    message: string
    count: number
}
 type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}
 type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
}

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _collSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void
}
 type ActionType = ReturnType<typeof addPostActionCreator> 
| ReturnType<typeof updateNewPostTextActionCreator>
| ReturnType<typeof updateNewMessageTextActionCreator> 
| ReturnType<typeof sendMessageActionCreator>

// export const store: StoreType = {
//     _state: {
//         dialogsPage: {
//             dialogs: [
//                 { id: "1", name: "Jenia" },
//                 { id: "2", name: "Sveta" },
//                 { id: "3", name: "Hleb" }
//             ],
//             messages: [
//                 { id: "1", message: "Hi" },
//                 { id: "2", message: "How are you" },
//                 { id: "3", message: "What do you do?" }
//             ],
//             newMessageBody: ''
//         },
//         profilePage: {
//             posts: [
//                 { id: "1", message: 'Hi, how are you', count: 10 },
//                 { id: "2", message: 'It\'s my first post', count: 15 }
//             ],
//             newPostText: 'your message'
//         }

//     },
//     getState() {
//         return this._state
//     },
//     _collSubscriber() {

//     },
//     subscribe(observer) {
//         this._collSubscriber = observer
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

//         this._collSubscriber(this._state);
//     },
   
// };



// export default store;