// import './Menu.css'

function Menu() {
    return (
        <>
            <div>
                <h1 id="menu-title">Developer Maker</h1>
            </div>
            <div id="active-menu">
                <div id="active-title">
                    <h2>Activation</h2>
                </div>
                <div className="wrapper">
                    <input type="checkbox" id="switch" />
                    <label for="switch" className="switch_label">
                        <span className="onf_btn"></span>
                    </label>
                </div>
            </div>
            <hr width="95%" color="#333" size="1" />
            <div>
                <h2 id="timer-title">Timer Setting</h2>
                <div className="timer-menu">
                    <input type="radio" id="manual" name="timer-set" value="manual" checked />
                    <label for="huey">Timer starts when you press the button</label>
                </div>
                <div className="timer-menu">
                    <input type="radio" id="auto" name="timer-set" value="auto" />
                    <label for="auto">Timer starts automatically when you enter the problem page</label>
                </div>
            </div>
        </>
    );
}

export default Menu;