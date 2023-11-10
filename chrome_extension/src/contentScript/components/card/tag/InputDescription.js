import { useState } from 'react';

function InputDescription(props) {
    const [description, setDescription] = useState('');
    const [formState, setFormState] = useState('ready');

    const descriptionCopy = () => {
        var x = props.curPage == 'boj' ? document.getElementById('problem_description') : document.getElementsByClassName('problem-statement').item(0).childNodes.item(1);

        x = x.textContent.split(/\n| |\t/).filter(item=>item).join(' ').split('$');
        const len = x.length;
        for (var i = 1; i < len; i += 2) {
            x[i-1] = ' ' + x[i - 1].split(' ').slice(0, -1).join(' ') + ' ';
        }
        return x.join('$')
    }

    const handlePredictClick = () => {
        // console.log(description)
        setFormState('loading')
    
        chrome.runtime.sendMessage({ type: 'predict', description: description }, function (response) {
            props.setTagList(response)
            
            setFormState('ready')
            props.setSubMenuState('tagLoading')
        })
    }

    const fieldDisalbed = formState === 'loading' ? true : false

    return (
        <div className='sub-menus'>
            <textarea id='gsb-description-textarea' placeholder='Input description here' value={description} onChange={event => setDescription(event.target.value)} disabled={fieldDisalbed} />
            <div id='description-btn-container'>
                <button className='description-btns' id='dsc-copy-btn' onClick={() => setDescription(descriptionCopy())} disabled={fieldDisalbed}>Description Copy</button>
                <button className='description-btns' id='erase-btn' onClick={() => setDescription('')} disabled={fieldDisalbed}>Erase</button>
                <button className='description-btns' id='tag-predict-btn' onClick={handlePredictClick} disabled={fieldDisalbed}>{formState === 'ready' ? 'Tag Predict' : 'Predicting...'}</button>
            </div>
        </div>
    )
}

export default InputDescription;