import tag from './images/tag.svg'

function Tag(props) {
    return (
        <div className='buttons' id='tag-btn'>
            <img className='button-imgs' src={tag} title='Tag prediction' onClick={() => props.setSubMenuState('input')} />
        </div>
    )
}

export default Tag;