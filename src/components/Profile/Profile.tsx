import profile from "./Profile.module.css";
import {Mypost} from "./MyPosts/Mypost";

export const Profile = ()=>{
    return (
        <div className={profile.profile}>
            <div>
                <img src="https://damion.club/uploads/posts/2021-12/thumbs/1640539447_6-damion-club-p-osen-v-kanade-priroda-6.jpg" alt=""/>
            </div>
            <Mypost />
        </div>
    )
}