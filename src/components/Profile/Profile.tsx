import profile from "./Profile.module.css";
import {Mypost} from "./MyPosts/Mypost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = ()=>{
    return (
        <div className={profile.profile}>
            <ProfileInfo/>
            <Mypost />
        </div>
    )
}