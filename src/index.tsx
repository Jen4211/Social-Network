
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from './StoreContext/StoreContext';
import store from './redux/redux-store';
import { RootStateType } from './redux/state';




export const rerenderEntireTree = (state:RootStateType) => {

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root')

    );

}


rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    console.log(state);
    rerenderEntireTree(state)
    
    
})