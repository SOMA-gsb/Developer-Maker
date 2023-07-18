import Title from './Title';
import Active from './Active';
import TimerSet from './TimerSet';
import './Menu.css'

function Menu() {
    return (
        <>
            <Title />
            <Active />
            <hr id='popup-hr' />
            <TimerSet />
        </>
    );
}

export default Menu;