
import { FC } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addPostActionCreator, InitialProfileStateType, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import { AppStateType } from "../../../redux/redux-store";

import MyPosts from "./MyPosts";

type mapStatePropsType = {
    profilePage: InitialProfileStateType
}

type mapDispatchToPropsType = {
    addPost: () => void
    onPostChange: (text: string) => void
}


let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        onPostChange: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;