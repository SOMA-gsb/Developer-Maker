import tag from './images/tag.svg'

function Tag(props) {
    return (
        <div className='buttons' id='tag-btn'>
            <img className='button-imgs' src={tag} title='Tag prediction' onClick={() => props.setSubMenuState('tagInput')} />
        </div>
    )
}

export default Tag;