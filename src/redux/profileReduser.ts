import { ActionType, ProfilePageType } from "./state";

const initialState = {
    posts: [
        { id: "1", message: 'Hi, how are you', count: 10 },
        { id: "2", message: 'It\'s my first post', count: 15 }
    ],
    newPostText: 'your message'
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {
                id: "5",
                message: state.newPostText,
                count: 0
            }
            state.posts.push(newPost)
            state.newPostText = ' ';
            return state;
    case 'UPDATE-NEW-POST-TEXT':
        state.newPostText = action.newText;
        return state;
        default:
            return state;
    }
   
};

export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    } as const
}
export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const
}