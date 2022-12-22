import profileInfo from "../ProfileInfo/ProfileInfo.module.css";


export const ProfileInfo = () => {
    return (
        <div>
            <div className={profileInfo.profileInfo}>
                <img src="https://damion.club/uploads/posts/2021-12/thumbs/1640539447_6-damion-club-p-osen-v-kanade-priroda-6.jpg" alt=""/>
            </div>
            <div className={profileInfo.item}>
                ava + description
            </div>
        </div>
    )
}