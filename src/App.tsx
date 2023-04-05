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
import  { RootStateType } from './redux/state';

type AppPropsType = {
  state: RootStateType
  addPost: (newValue: string) => void
}

const App:React.FC<AppPropsType> = ({state, addPost}) => {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <NavBar />
        <div className='app_wrapper_content'>
            <Route path="/dialogs" render={() => <Dialogs {...state.dialogsPage} />} />
            <Route path="/profile" render={() => <Profile profilePage={state.profilePage} addPost={addPost}/>} />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
