// import { ActionType} from "./state";


export type DialogsType = {
    id: string
    name: string
}
export type MessagesType = {
    id?: string
    message: string
}
type ActionType = ReturnType<typeof updateNewMessageTextActionCreator>
    | ReturnType<typeof sendMessageActionCreator>
    
const initislState = {
    dialogs: [
        { id: "1", name: "Jenia" },
        { id: "2", name: "Sveta" },
        { id: "3", name: "Hleb" }
    ] as Array<DialogsType>,
    messages: [
        { id: "1", message: "Hi" },
        { id: "2", message: "How are you" },
        { id: "3", message: "What do you do?" }
    ] as Array<MessagesType>,
    newMessageBody: ''
}

export type InitislDialogsStateType = typeof initislState;

export const dialogsReducer = (state: InitislDialogsStateType = initislState, action: ActionType): InitislDialogsStateType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {...state, newMessageBody: action.newMessage};
        case 'SEND-MESSAGE':
            return {
                ...state,
                newMessageBody : ' ',
                messages: [...state.messages, {id: '4', message: state.newMessageBody}]
            };
        default:
            return state;
    }
};

export const updateNewMessageTextActionCreator = (message: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newMessage: message
    } as const
}
export const sendMessageActionCreator = () => {
    return {
        type: 'SEND-MESSAGE',
    } as const
}
