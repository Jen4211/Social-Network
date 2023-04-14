import { FC } from "react";
import { ActionType, ProfilePageType } from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
  profilePage: ProfilePageType
  dispatch: (action: ActionType) => void
}

const Profile: FC<ProfilePropsType> = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch} />
    </div>
  )
}

export default Profile;