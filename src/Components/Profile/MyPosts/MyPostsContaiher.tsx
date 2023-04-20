
import { FC } from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReduser";
import StoreContext from "../../../StoreContext/StoreContext";
import MyPosts from "./MyPosts";


type MyPostsContainerPropsType = {

}

const MyPostsContainer: FC<MyPostsContainerPropsType> = () => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                 
                const state = store.getState()

                const addPost = () => {
                    store.dispatch(addPostActionCreator());
                }
                const onPostChange = (text: string) => {
                    store.dispatch(updateNewPostTextActionCreator(text))

                }

                return (
                    <MyPosts addPost={addPost}
                        onPostChange={onPostChange}
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText} />
                )
            }

            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;