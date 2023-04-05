import React from "react";
import { FC } from "react";
import { PostsType } from "../../../redux/state";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

type MyPostPropsType = {
    posts: Array<PostsType>
    addPost: (newValue: string) => void
}

const MyPosts: FC<MyPostPropsType> = (props) => {
    const newPostValue = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        
        if(newPostValue.current) {
            props.addPost(newPostValue.current.value);
        }
           
        if(newPostValue.current) {
            newPostValue.current.value = ""
        }
       
        
    }

    return (
        <div className={s.wrap_myPost}>
            <h3>My post</h3>
            <div>
                <textarea ref={newPostValue}></textarea>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div>
                {props.posts.map(p => {
                    return (
                        <Post key={p.id} count={p.count} message={p.message} />
                    )
                })}
            </div>
        </div>
    )
}

export default MyPosts