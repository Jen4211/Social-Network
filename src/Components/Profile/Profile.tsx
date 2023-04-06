import { FC } from "react";
import { ProfilePageType } from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
  profilePage: ProfilePageType
  addPost: ()=> void
  updateNewPostText: (newText: string) => void
}

const Profile: FC<ProfilePropsType> = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts}
      newPostText={props.profilePage.newPostText}
      addPost={props.addPost}
      updateNewPostText={props.updateNewPostText}/>
    </div>
  )
}

export default Profile;