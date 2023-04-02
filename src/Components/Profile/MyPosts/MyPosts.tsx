import { FC } from "react";
import { ProfilePageType } from "../../../redux/state";
import s from "./MyPosts.module.css";
import Post  from "./Post/Post";


const MyPosts: FC<ProfilePageType> = (props) => {


    return (
        <div className={s.wrap_myPost}>
           <h3>My post</h3> 
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div>
                {props.posts.map(p => {
                    return(
                        <Post key={p.id} count={p.count} message={p.message}/>
                    )
                })}
            </div>
        </div>
    )
}

export default MyPosts