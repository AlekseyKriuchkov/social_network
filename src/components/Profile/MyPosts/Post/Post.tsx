import post from "./Post.module.css";
import {PostType} from "../../../../index";


export const Post = (props: PostType)=>{
    return (
        <div className={post.item}>
            <span>
                <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg" alt=""/>
                {props.message}
            </span>
            <div>
                Like {props.likes}
            </div>
        </div>

    )
}