import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Music from './Components/Music/Music';
import NavBar from './Components/NavBar/NavBar';
import News from './Components/News/News';
import Profile from './Components/Profile/Profile';
import Settings from './Components/Settings/Settings';
import  { ActionType, RootStateType } from './redux/state';

type AppPropsType = {
  state: RootStateType
  dispatch: (action: ActionType) => void
}

const App:React.FC<AppPropsType> = (props) => {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <NavBar />
        <div className='app_wrapper_content'>
            <Route path="/dialogs" render={() => <Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}/>} />
            <Route path="/profile" render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>} />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
