import './Settings.scss';

import Input from "./Input";

const Settings = ({ settings, setSettings }) => {
    return (
        <div className="settings">
            <div className="settings_title">Board</div>
            <div className="settings_board">
                <div className="settings_input">
                    <div>Width</div>
                    <div className="settings_input_display">
                        <div>{settings.width}</div>
                        <Input setSettings={setSettings} name="width" settings={settings} />
                    </div>
                </div>
                <div className="settings_input">
                    <div>Height</div>
                    <div className="settings_input_display">
                        <div>{settings.height}</div>
                        <Input setSettings={setSettings} name="height" settings={settings} />
                    </div>
                </div>
                <div className="settings_board_size">Total Boxes: {settings.width * settings.height}</div>
            </div>
            <div className="settings_title">Players</div>
            <div className="settings_input">
                <div className="settings_input_display">
                    <div>{settings.players}</div>
                    <Input setSettings={setSettings} name="players" settings={settings} />
                </div>
            </div>
        </div>
    );
};

export default Settings;