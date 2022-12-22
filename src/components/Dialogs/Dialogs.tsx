import dialogs from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={dialogs.dialogs}>
            <div className={dialogs.dialogsItems}>
                <div className={dialogs.dialog}>
                    <NavLink to="/dialogs/id.1">Alex</NavLink>
                </div>
                <div className={dialogs.dialog}>
                    <NavLink to="/dialogs/id.2">Дедущка</NavLink>
                </div>
                <div className={dialogs.dialog}>
                    <NavLink to="/dialogs/id.3">Nikolya</NavLink>
                </div>
                <div className={dialogs.dialog}>
                    <NavLink to="/dialogs/id.4">Viktor</NavLink>
                </div>
                <div className={dialogs.dialog}>
                    <NavLink to="/dialogs/id.5">Tatiana</NavLink>
                </div>
                <div className={dialogs.dialog}>
                    <NavLink to="/dialogs/id.6">Eve</NavLink>
                </div>
            </div>
            <div className={dialogs.messages}>
                <div className={dialogs.message}>Hello</div>
                <div className={dialogs.message}>NwajkC</div>
                <div className={dialogs.message}>BJHDwbd</div>
                <div className={dialogs.message}>12425</div>
                <div className={dialogs.message}>hfsekhv</div>
            </div>
        </div>
    )
}