import close from './images/close.svg'
import open from './images/open.svg'

function Title(props) {
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

    return (
        <div id='title' onMouseDown={setOffset} onMouseMove={moveDiv} onMouseUp={setPosition}>
            <span>Developer Maker</span>
            <img id='title-bar' src={props.menuVisible ? close : open} onClick={props.onBar} />
        </div>
    )
}

export default Title;