import dialogs from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogMessage} from "./DialogMessage/DialogMessage";

export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: "Alex"},
        {id: 2, name: "Дедущка"},
        {id: 3, name: "Nikolya"},
        {id: 4, name: "Viktor"},
        {id: 5, name: "Tatiana"},
        {id: 6, name: "Eve"},
    ]
    let dialogsElements = dialogsData.map(d => <DialogItem id={d.id} name={d.name}/>)

    let messagesData = [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "I'm fun!"},
        {id: 4, message: "Bye!"},
    ]
    let messagesElements = messagesData.map(m => <DialogMessage id={m.id} message={m.message}/>)

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