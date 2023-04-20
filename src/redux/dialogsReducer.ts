import { ActionType, DialogsPageType} from "./state";

const initislState:DialogsPageType = {
    dialogs: [
        { id: "1", name: "Jenia" },
        { id: "2", name: "Sveta" },
        { id: "3", name: "Hleb" }
    ],
    messages: [
        { id: "1", message: "Hi" },
        { id: "2", message: "How are you" },
        { id: "3", message: "What do you do?" }
    ],
    newMessageBody: ''
}

export const dialogsReducer = (state: DialogsPageType = initislState, action: ActionType) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageBody = action.newMessage;
            return state;
        case 'SEND-MESSAGE':
            const newMessage = {
                id: '4',
                message: state.newMessageBody,
            }
            state.messages.push(newMessage);
            state.newMessageBody = ' ';
            return state;
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