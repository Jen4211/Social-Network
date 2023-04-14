import { ActionType, PostsType, ProfilePageType } from "./state";



export const profileReducer = (state: ProfilePageType, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostsType = {
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