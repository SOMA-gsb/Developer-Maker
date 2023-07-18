import { useEffect } from 'react';

function Active() {
    function changeCheck(e) {
        chrome.storage.local.set({
            active: !e.target.checked
        })
    }

    useEffect(() => {
        chrome.storage.local.get(['active'], (res) => {
            const activeBox = document.getElementById('switch');
            activeBox.checked = 'active' in res && !res.active;
        })
    })

    return (
        <div id="active-menu">
            <div id="active-title">
                <h2>Activation</h2>
            </div>
            <div className="wrapper">
                <input type="checkbox" id="switch" onChange={changeCheck} />
                <label htmlFor="switch" className="switch_label">
                    <span className="onf_btn"></span>
                </label>
            </div>
        </div>
    )
}

export default Active;