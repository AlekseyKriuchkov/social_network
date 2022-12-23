import mypost from "./Mypost.module.css";
import {Post} from "./Post/Post";

export const Mypost = () => {

    let postsData = [
        {id: 1, message: "Hello", likes: 5},
        {id: 2, message: "How are you?", likes: 7},

    ]

    return (
        <div className={mypost.mypost}>
            <div className={mypost.item}>
                My posts
            </div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <Post message={postsData[0].message} like={postsData[0].likes}/>
            <Post message={postsData[1].message} like={postsData[1].likes}/>
        </div>
    )
}