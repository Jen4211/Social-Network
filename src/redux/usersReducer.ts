
export type LocationType = {
    city: string
    country: string
}
export type UsersType = {
    id: string
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

const initislState = {
    users: [
        {
            id: "1",
            photoUrl: "https://cdn.shopify.com/s/files/1/0467/4977/8069/products/499-I_do_what_want_cat_flipping_final_1000x.jpg?v=1651013547",
            followed: true,
            fullName: "Hleb",
            status: "I like ice cream",
            location: {
                city: "Minsk",
                country: "Belarus"
            }
        },
        {
            id: "2",
            photoUrl: "https://cdn.shopify.com/s/files/1/0467/4977/8069/products/499-I_do_what_want_cat_flipping_final_1000x.jpg?v=1651013547",
            followed: false,
            fullName: "Sveta",
            status: "I love Danik",
            location: {
                city: "Rome",
                country: "Itali"
            }
        },
        {
            id: "3",
            photoUrl: "https://cdn.shopify.com/s/files/1/0467/4977/8069/products/499-I_do_what_want_cat_flipping_final_1000x.jpg?v=1651013547",
            followed: true,
            fullName: "Jenia",
            status: "I want to new job",
            location: {
                city: "Minsk",
                country: "Belarus"
            }
        }
    ] as Array<UsersType>
}
type ActionType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>;

export type InitialUsersStateType = typeof initislState;

export const usersReducer = (state: InitialUsersStateType = initislState, action: ActionType): InitialUsersStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    return u.id === action.id ? { ...u, followed: true } : u;
                })
            }
           
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    return u.id === action.id ? { ...u, followed: false } : u;
                })
            }
           
            case "SET-USERS":
                return {
                    ...state, users: [...state.users, action.users]
                }

        default:
            return state;
    }
}

export const followAC = (userId: string) => {
    return {
        type: "FOLLOW",
        id: userId
    } as const
}

export const unfollowAC = (userId: string) => {
    return {
        type: "UNFOLLOW",
        id: userId
    } as const
}
export const setUsersAC = (users: any) => {
    return {
        type: "SET-USERS",
        users
    } as const
}