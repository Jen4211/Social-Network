
import { ChangeEvent } from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import { ActionType, DialogsPageType } from '../../redux/state';
import s from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

type DialogsPropsType = {
    dispatch: (action: ActionType) => void
    dialogsPage: DialogsPageType
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {
    const addMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }
    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
props.dispatch(updateNewMessageTextActionCreator(e.currentTarget.value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.list_dialogs}>
                {props.dialogsPage.dialogs.map(d => {
                    return (
                        <DialogItem key={d.id} id={d.id} name={d.name} />
                    )
                })}

            </div>
            <div className={s.list_messages}>
                {props.dialogsPage.messages.map(m => {
                    return (
                        <Message key={m.id} message={m.message} />
                    )
                })}
                <div>
                    <div>
                        <textarea placeholder='Enter your messages'
                            onChange={onMessageChange}
                            value={props.dialogsPage.newMessageBody} />
                    </div>
                    <div>
                        <button onClick={addMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;