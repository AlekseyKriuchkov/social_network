import dialogs from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemProps = {
    id: number
    name: string
}

export const DialogItem = (props: DialogItemProps) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={dialogs.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}