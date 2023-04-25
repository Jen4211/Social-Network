
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { InitislDialogsStateType, sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import { AppStateType } from '../../redux/redux-store';
import Dialogs from './Dialogs';


type mapStatePropsType = {
    dialogsPage: InitislDialogsStateType
}
type mapDispatchPropsType = {
    addMessage: () => void
    onMessageChange: (message: string) => void
}

let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
return {
    addMessage: () => {
        dispatch(sendMessageActionCreator())
    },
    onMessageChange: (message: string) => {
        dispatch(updateNewMessageTextActionCreator(message))
        
    }
}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;