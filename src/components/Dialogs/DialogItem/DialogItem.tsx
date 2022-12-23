import dialogs from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemProps = {
    id: number
    name: string
}

export const DialogItem = (props: DialogItemProps) => {
    return (
        <div className={dialogs.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}