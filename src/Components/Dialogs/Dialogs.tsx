
import { DialogsPageType} from '../../redux/state';
import s from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
 

const Dialogs:React.FC<DialogsPageType> = (props) => {
    
    return (
        <div className={s.dialogs}>
            <div className={s.list_dialogs}>
                {props.dialogs.map(d => {
                    return(
                        <DialogItem key={d.id} id={d.id} name={d.name} />
                    )
                })}
                
            </div>
            <div className={s.list_messages}>
                {props.messages.map(m => {
                    return(
                        <Message key={m.id} message={m.message} />
                    )
                })}
            </div>
        </div>
    )
}

export default Dialogs;