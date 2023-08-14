import tag from '../images/tag.svg'
import tagGray from '../images/tagGray.svg'

function Tag(props) {
    const handleTagBtnClick = () => {
        props.setSubMenuState('tagInput')
        props.setMenuState('tag')
    }

    return (
        <div className='buttons' id='tag-btn'>
            <img className='button-imgs' src={props.menuState == '' || props.menuState == 'tag' ? tag : tagGray} title='Tag prediction' onClick={handleTagBtnClick} />
        </div>
    )
}

export default Tag;