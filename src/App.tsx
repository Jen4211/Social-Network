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


type AppPropsType = {

}

const App: React.FC<AppPropsType> = (props) => {
  return (

    <div className="app_wrapper">
      <Header />
      <NavBar />
      <div className='app_wrapper_content'>
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/profile" render={() => <Profile  />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
      </div>
    </div>

  );
}

export default App;
