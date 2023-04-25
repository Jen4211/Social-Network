import { FC } from "react"; 
import MyPostsContainer from "./MyPosts/MyPostsContaiher";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {

}

const Profile: FC<ProfilePropsType> = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPostsContainer  />
    </div>
  )
}

export default Profile;