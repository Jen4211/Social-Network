import { InitialUsersStateType } from "../../redux/usersReducer";
import style from "./users.module.css";

type UsersPropsType = {
    usersPage: InitialUsersStateType
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: any) => void
}

const Users: React.FC<UsersPropsType> = (props) => {

if(props.usersPage.users.length === 0) {
    props.setUsers([
        {
            id: "1",
            photoUrl: "https://cdn.shopify.com/s/files/1/0467/4977/8069/products/499-I_do_what_want_cat_flipping_final_1000x.jpg?v=1651013547",
            followed: true,
            fullName: "Hleb",
            status: "I like ice cream",
            location: {
                city: "Minsk",
                country: "Belarus"
            }
        },
        {
            id: "2",
            photoUrl: "https://cdn.shopify.com/s/files/1/0467/4977/8069/products/499-I_do_what_want_cat_flipping_final_1000x.jpg?v=1651013547",
            followed: false,
            fullName: "Sveta",
            status: "I love Danik",
            location: {
                city: "Rome",
                country: "Itali"
            }
        },
        {
            id: "3",
            photoUrl: "https://cdn.shopify.com/s/files/1/0467/4977/8069/products/499-I_do_what_want_cat_flipping_final_1000x.jpg?v=1651013547",
            followed: true,
            fullName: "Jenia",
            status: "I want to new job",
            location: {
                city: "Minsk",
                country: "Belarus"
            }
        }
    ])
}

    return (
        <div>
            {
                props.usersPage.users.map(u => {
                    return (<div key={u.id}>
                        <div >
                            <div className={style.photo_user}>
                                <img src={u.photoUrl} alt="logo" />
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={()=> {props.unFollow(u.id)}}>follow</button>
                                    : <button onClick={()=> {props.follow(u.id)}}>unfollow</button>}
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3>{u.fullName}</h3>
                                <p>{u.status}</p>
                            </div>
                            <div>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Users;