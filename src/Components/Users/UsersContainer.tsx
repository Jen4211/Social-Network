import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppStateType } from "../../redux/redux-store";
import { followAC, InitialUsersStateType, setUsersAC, unfollowAC } from "../../redux/usersReducer";
import Users from "./Users";


type MapStatePropsType = {
    usersPage: InitialUsersStateType
}
type MapDispatchPropsType = {
follow: (userId: string) => void
unFollow: (userId: string) => void
setUsers: (users: any) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;