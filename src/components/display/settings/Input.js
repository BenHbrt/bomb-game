import './Input.scss';

const Input = ({ setSettings, name, settings }) => {

    const handleClick = (e) => {
        const newSettings = {...settings};
        if (e.target.name === "up" && newSettings[name] < 6) {
            newSettings[name] += 1;
        } else if (e.target.name === "down") {
            if (name === "players" && newSettings.players > 2) {
                newSettings[name] -= 1;
            } else if (newSettings[name] > 3) {
                newSettings[name] -= 1;
            } 
        }
        setSettings(newSettings);
    }

    return (
        <div className="input">
            <img src={require("../../../img/arrow_up.png")} alt="up icon" name="up" onClick={handleClick} />
            <img src={require("../../../img/arrow_down.png")} alt="down icon" name="down" onClick={handleClick} />
        </div>
    );
};

export default Input;