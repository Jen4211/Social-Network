
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import StoreContext from '../../StoreContext/StoreContext';
import Dialogs from './Dialogs';


type DialogsContainerPropsType = {
    
}

const DialogsContainer: React.FC<DialogsContainerPropsType> = () => {


    return (
        <StoreContext.Consumer>
            { (store) => {
                const state = store.getState().dialogsPage
                const addMessage = () => {
                    store.dispatch(sendMessageActionCreator())
                }
                const onMessageChange = (message: string) => {
                    store.dispatch(updateNewMessageTextActionCreator(message))
                }
                return (
                    <Dialogs addMessage={addMessage}
                        onMessageChange={onMessageChange}
                        dialogsPage={state} />
                )
            }
        }

        </StoreContext.Consumer>
    )
}
export default DialogsContainer;