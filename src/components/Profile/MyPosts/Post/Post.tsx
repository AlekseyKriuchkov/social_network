import post from "./Post.module.css";

type PostPropsType = {
    message: string,
    like: number,
}
export const Post = (props:PostPropsType)=>{
    return (
        <div className={post.item}>
            <span>
                <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg" alt=""/>
                {props.message}
            </span>
            <div>
                Like {props.like}
            </div>
        </div>

    )
}