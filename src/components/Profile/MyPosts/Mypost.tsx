import mypost from "./Mypost.module.css";
import {Post} from "./Post/Post";
import React from "react";
import {PostType} from "../../../index";

export type PropsType = {
    postsData: Array<PostType>
}

export const Mypost = (props: PropsType) => {


    let postsElements = props.postsData.map(p => <Post id={p.id} message={p.message} likes={p.likes}/>)

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
            {postsElements}
        </div>
    )
}