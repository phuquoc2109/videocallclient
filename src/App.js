import React from 'react';
import './App.scss';
import { Typography, AppBar} from '@material-ui/core'
import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Options from './components/Options';

function App() {
  return (
    <div className="App">
      <AppBar className="App__appBar" position="static" color="inherit">
        <Typography variant="h2" align="center">Video Chat</Typography>
      </AppBar>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  );
}

export default App;
