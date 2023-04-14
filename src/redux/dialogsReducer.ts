import { ActionType, DialogsPageType, MessagesType } from "./state";

export const dialogsReducer = (state: DialogsPageType, action: ActionType) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageBody = action.newMessage;
            return state;
        case 'SEND-MESSAGE':
            const newMessage: MessagesType = {
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