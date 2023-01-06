import profile from "./Profile.module.css";
import {Mypost, PropsType} from "./MyPosts/Mypost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";



export const Profile = (props: PropsType)=>{
    return (
        <div className={profile.profile}>
            <ProfileInfo />
            <Mypost postsData={props.postsData}/>
        </div>
    )
}