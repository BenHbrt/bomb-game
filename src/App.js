import './Global.scss';
import './App.scss';

import { useState } from 'react';

import Settings from './components/display/settings/Settings';

function App() {

  const [display, setDisplay] = useState("settings");
  const [settings, setSettings] = useState({
    width: 3,
    height: 3,
    players: 2
  })

  return (
    <div className="app">
      <h1>Bomb Game</h1>
      <div className="app_mainContainer">
        {display === "settings" ? <Settings settings={settings} setSettings={setSettings} /> : null}
      </div>
    </div>
  );
}

export default App;
