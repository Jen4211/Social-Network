import React, { ChangeEvent } from "react";
import { FC } from "react";
import { PostsType } from "../../../redux/state";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

type MyPostPropsType = {
    posts: Array<PostsType>
    addPost: () => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}

const MyPosts: FC<MyPostPropsType> = (props) => {
    
    const addPost = () => {
        props.addPost();
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
       props.updateNewPostText(e.currentTarget.value)

    }

    return (
        <div className={s.wrap_myPost}>
            <h3>My post</h3>
            <div>
                <textarea 
                 onChange={onPostChange}
                 value={props.newPostText} />
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