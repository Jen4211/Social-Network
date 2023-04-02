import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <>
            <div className={s.wrap_img}>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="backgraund" />
            </div>
            <div>
                ava +discription
            </div>
        </>
    )
}

export default ProfileInfo;