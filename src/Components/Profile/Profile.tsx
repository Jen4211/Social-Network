import { FC } from "react";
import { ProfilePageType } from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
  profilePage: ProfilePageType
  addPost: (newValue: string)=> void
}

const Profile: FC<ProfilePropsType> = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts}
      addPost={props.addPost}/>
    </div>
  )
}

export default Profile;