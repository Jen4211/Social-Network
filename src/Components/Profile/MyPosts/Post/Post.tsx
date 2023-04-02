import { FC } from "react";
import { PostsType } from "../../../../redux/state";
import s from "./Post.module.css"



const Post: FC<PostsType> = (props) => {
    return (
        <div className={s.wrap_post}>
            <img src="https://www.svgrepo.com/show/49778/cat.svg" alt="cat" />
            {props.message}
            <div>
                <span>
                  like: {props.count}
                </span>
            </div>
        </div>
    )
}

export default Post;