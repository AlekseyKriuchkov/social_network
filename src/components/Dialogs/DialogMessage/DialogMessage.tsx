import dialogs from "../Dialogs.module.css";

type DialogMessageProps = {
    id: number,
    message: string
}
export const DialogMessage = (props: DialogMessageProps) => {
    return (
        <div className={dialogs.message}>{props.message}</div>
    )
}