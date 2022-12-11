import mypost from "./Mypost.module.css";
import {Post} from "./Post/Post";

export const Mypost = ()=>{
    return (
        <div className={mypost.mypost}>
            <div className={mypost.item}>
                ava + description
            </div>
            <div className={mypost.item}>
                My posts
            </div>
            <textarea></textarea>
            <button>Add post</button>
            <Post message="Hello" like={5}/>
            <Post message="How are you?" like={7}/>
            <Post message="My name is Alex" like={0}/>
            <Post message="Nice to meet you!" like={13}/>
        </div>
    )
}