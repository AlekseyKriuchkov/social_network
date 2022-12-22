import mypost from "./Mypost.module.css";
import {Post} from "./Post/Post";

export const Mypost = () => {
    return (
        <div className={mypost.mypost}>
            <div className={mypost.item}>
                My posts
            </div>
            <textarea></textarea>
            <button>Add post</button>
            <Post message="Hello" like={5}/>
            <Post message="How are you?" like={7}/>
        </div>
    )
}