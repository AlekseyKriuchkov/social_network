import dialogs from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogItem";

export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: "Alex"},
        {id: 2, name: "Дедущка"},
        {id: 3, name: "Nikolya"},
        {id: 4, name: "Viktor"},
        {id: 5, name: "Tatiana"},
        {id: 6, name: "Eve"},
    ]
    let messagesData = [
        {id: 1, message: "Hello"},
        {id: 2, message: "NwajkC"},
        {id: 3, message: "BJHDwbd"},
        {id: 4, message: "12425"},
        {id: 5, message: "hfsekhv"},
    ]

    return (
        <div className={dialogs.dialogs}>
            <div className={dialogs.dialogsItems}>
                <DialogItem id={dialogsData[0].id} name={dialogsData[0].name}/>
                <DialogItem id={dialogsData[1].id} name={dialogsData[1].name}/>
                <DialogItem id={dialogsData[2].id} name={dialogsData[2].name}/>
                <DialogItem id={dialogsData[3].id} name={dialogsData[3].name}/>
                <DialogItem id={dialogsData[4].id} name={dialogsData[4].name}/>
                <DialogItem id={dialogsData[5].id} name={dialogsData[5].name}/>

            </div>
            <div className={dialogs.messages}>
                <div className={dialogs.message}>{messagesData[0].message}</div>
                <div className={dialogs.message}>{messagesData[1].message}</div>
                <div className={dialogs.message}>{messagesData[2].message}</div>
                <div className={dialogs.message}>{messagesData[3].message}</div>
                <div className={dialogs.message}>{messagesData[4].message}</div>
            </div>
        </div>
    )
}