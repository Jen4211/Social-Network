export type DialogsType = {
    id: string
    name: string
}
export type MessagesType = {
    id?: string
    message: string
} 
export type PostsType = {
    id: string
    message: string
    count: number
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
export type ProfilePageType = {
    posts: Array<PostsType>
}
export type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
}


const state: RootStateType = {
    dialogsPage: {
        dialogs: [
            { id: "1", name: "Jenia" },
            { id: "2", name: "Sveta" },
            { id: "3", name: "Hleb" }
        ],
        messages: [
            { id: "1", message: "Hi" },
            { id: "2", message: "How are you" },
            { id: "3", message: "What do you do?" }
        ]
    },
    profilePage: {
        posts: [
            {id: "1", message: 'Hi, how are you', count: 10},
            {id: "2", message: 'It\'s my first post', count: 15}
          ]
    }

}

export default state;