import './List.css'
import { triangleIcon } from "../../assets/common";
import TagListElem from './TagListElem';
import ExamResult from './ExamResult';
import { useEffect, useState } from 'react';

function List(props) {
    const [filteredTags, setFilteredTags] = useState(props.contents);
    const [tags, setTags] = useState(props.contents);

    useEffect(() => {
        if(props.query != '') {
            setFilteredTags(tags.filter((content) => {
                return content.tag.toLowerCase().replace(/ /g, '').includes(props.query.toLowerCase().replace(/ /g, ''));
            }));
        }
    }, [props.query]);

    useEffect(() => {
        const sortedTags = [...props.contents].sort((a, b) => {
            if (props.sortType == 'Basic') {
                return a.id - b.id;
            }
            else if (props.sortType == 'High level') {
                return b.level - a.level || a.id - b.id;
            }
            else if (props.sortType == 'Low level') {
                return a.level - b.level || a.id - b.id;
            }
        })
        setFilteredTags(sortedTags)
        setTags(sortedTags)
    }, [props.sortType]);

    return (
        <div className={`list-table ${props.class}`}>
            <div className="list-thead">
                <div></div>
                {
                    props.heads.map((head) => (
                        <div key={head.id}>
                            <span>{head.name}</span>
                            <img className="triangle-icon" src={triangleIcon} alt='list' />
                        </div>
                    ))
                }
            </div>
            {props.class == 'analysis-list' && <hr />}
            <div className="list-tbody">
                {
                    props.type == 'tagList' ?
                    filteredTags.map((content) => (
                        <TagListElem id={content.id} tag={content.tag} level={content.level} progress={content.progress} lastStudy={content.lastStudy} key={content.id} />
                    )) :
                    props.type == 'examResult' ?
                    filteredTags.slice(props.offset, props.offset + 5).map((content) => (
                        <ExamResult id={content.id} date={content.date} level={content.level} score={content.score} totalScore={content.totalScore} percentage={content.percentage} key={content.id}/>
                    )) :
                    null
                }
            </div>
        </div>
    );
};

export default List;