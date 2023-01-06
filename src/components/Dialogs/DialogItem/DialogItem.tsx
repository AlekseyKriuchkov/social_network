import dialogs from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../index";


export const DialogItem = (props: DialogType) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={dialogs.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}