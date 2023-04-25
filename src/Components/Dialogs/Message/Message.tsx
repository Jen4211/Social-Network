import { FC } from 'react';
import { MessagesType } from '../../../redux/dialogsReducer';
import s from './../Dialogs.module.css'


const Message: FC<MessagesType> = (props) => {
    return (
        <div className={s.item_messag}>{props.message}</div>
    )
}

export default Message;