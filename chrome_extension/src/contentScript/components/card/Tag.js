import tag from './images/tag.svg'

function Tag() {
    return (
        <div className='buttons' id='tag-btn'>
            <img className='button-imgs' src={tag} title='Tag prediction' />
        </div>
    )
}

export default Tag;