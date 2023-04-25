
export type PostsType = {
    id?: string
    message: string
    count: number
}

type ActionType = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>

const initialState = {
    posts: [
        { id: "1", message: 'Hi, how are you', count: 10 },
        { id: "2", message: 'It\'s my first post', count: 15 }
    ] as Array<PostsType>,
    newPostText: 'your message'
}

export type InitialProfileStateType = typeof initialState;

export const profileReducer = (state: InitialProfileStateType = initialState, action: ActionType): InitialProfileStateType => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                newPostText: ' ',
                posts: [...state.posts, { id: "5", message: state.newPostText, count: 0 }]
            };
        case 'UPDATE-NEW-POST-TEXT':

            // state.newPostText = action.newText;
            return { ...state, newPostText: action.newText };
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