import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import Header from './Components/Header/Header';
import Music from './Components/Music/Music';
import NavBar from './Components/NavBar/NavBar';
import News from './Components/News/News';
import Profile from './Components/Profile/Profile';
import Settings from './Components/Settings/Settings';
import UsersContainer from './Components/Users/UsersContainer';




const App: React.FC = () => {
  return (

    <div className="app_wrapper">
      <Header />
      <NavBar />
      <div className='app_wrapper_content'>
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/profile" render={() => <Profile  />} />
        <Route path="/users" render={() => <UsersContainer  />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
      </div>
    </div>

  );
}

export default App;
