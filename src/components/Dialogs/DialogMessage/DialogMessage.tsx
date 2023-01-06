import dialogs from "../Dialogs.module.css";
import {MessageType} from "../../../index";


export const DialogMessage = (props: MessageType) => {
    return (
        <div className={dialogs.message}>{props.message}</div>
    )
}