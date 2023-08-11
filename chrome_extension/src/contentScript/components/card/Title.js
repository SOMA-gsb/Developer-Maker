import { useState } from 'react';
import close from './images/close.svg'
import open from './images/open.svg'

function Title() {
    const [isOpen, setIsOpen] = useState(true);
    let isDown = false, offset, div;

    const setOffset = (e) => {
        div = document.getElementById('card');
        isDown = true;
        offset = [
            div.offsetLeft - e.clientX,
            div.offsetTop - e.clientY
        ];
    }

    const moveDiv = (e) => {
        e.preventDefault();
        if (isDown) {
            div.style.left = (e.clientX + offset[0]) + 'px';
            div.style.top = (e.clientY + offset[1]) + 'px';
        }
    }
    document.body.addEventListener('mousemove', moveDiv);

    const setPosition = () => {
        isDown = false;
    }

    const handleBarClick = () => {
        const menu = document.getElementById('menu');
        menu.style.display = isOpen ? 'none' : 'block';
        setIsOpen(!isOpen);
    }

    return (
        <div id='title' onMouseDown={setOffset} onMouseMove={moveDiv} onMouseUp={setPosition}>
            <span>Developer Maker</span>
            <img id='title-bar' src={isOpen ? close : open} onClick={handleBarClick} />
        </div>
    )
}

export default Title;