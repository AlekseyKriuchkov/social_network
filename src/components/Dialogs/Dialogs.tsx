import dialogs from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogMessage} from "./DialogMessage/DialogMessage";
import {DialogType, MessageType} from "../../index";


export type DialogsPropsType = {
    dialogsData: Array<DialogType>,
    messagesData: Array<MessageType>
}


export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsData.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = props.messagesData.map(m => <DialogMessage id={m.id} message={m.message}/>)

    return (
        <div className={dialogs.dialogs}>
            <div className={dialogs.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={dialogs.messages}>
                {messagesElements}
            </div>
        </div>
    )
}