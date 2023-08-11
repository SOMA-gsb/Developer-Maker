import { useState } from 'react';

function InputDescription(props) {
    const [description, setDescription] = useState('');
    const [formState, setFormState] = useState('ready');

    const descriptionCopy = () => {
        var x = document.getElementById('problem_description').textContent.split(/\n| |\t/).filter(item=>item).join(' ').split('$');
        const len = x.length;
        for (var i = 1; i < len; i += 2) {
            x[i-1] = ' ' + x[i - 1].split(' ').slice(0, -1).join(' ') + ' ';
        }
        return x.join('$')
    }

    const handlePredictClick = () => {
        console.log(description)

        setFormState('loading')
        setTimeout(() => {
            setFormState('ready')
            props.setSubMenuState('loading')
        }, 1000)
    }

    const fieldDisalbed = formState === 'loading' ? true : false

    return (
        <div className='sub-menus'>
            <textarea id='description-textarea' placeholder='Input description here' value={description} onChange={event => setDescription(event.target.value)} disabled={fieldDisalbed} />
            <div id='description-btn-container'>
                <button className='description-btns' id='dsc-copy-btn' onClick={() => setDescription(descriptionCopy())} disabled={fieldDisalbed}>Description Copy</button>
                <button className='description-btns' id='erase-btn' onClick={() => setDescription('')} disabled={fieldDisalbed}>Erase</button>
                <button className='description-btns' id='tag-predict-btn' onClick={handlePredictClick} disabled={fieldDisalbed}>{formState === 'ready' ? 'Tag Predict' : 'Predicting...'}</button>
            </div>
        </div>
    )
}

export default InputDescription;