import { NavLink } from "react-router-dom";
import { DialogsType } from "../../../redux/state";
import s from "./../Dialogs.module.css"





const DialogItem: React.FC<DialogsType> = ({id, name}) => {
    let path = "/dialogs" + id;
    return (
        <div className={s.item_dialog}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}


export default DialogItem;