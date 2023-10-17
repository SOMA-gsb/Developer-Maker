import './List.css'
import { triangleIcon } from "../../assets/common";
import TagListElem from './TagListElem';
import { useEffect, useState } from 'react';

function List(props) {
    const [filteredTags, setFilteredTags] = useState(props.contents);
    const [tags, setTags] = useState(props.contents);

    useEffect(() => {
        setFilteredTags(tags.filter((content) => {
            return content.tag.toLowerCase().replace(/ /g, '').includes(props.query.toLowerCase().replace(/ /g, ''));
        }));
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
        <div className={`list-content ${props.class}`}>
            <table className="list-table">
                <thead className="list-thead">
                    <tr>
                        <th></th>
                        {
                            props.heads.map((head) => (
                                <th key={head.id}>
                                    <span>{head.name}</span>
                                    <img className="triangle-icon" src={triangleIcon} alt='list' />
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody className="list-tbody">
                    {
                        props.type == 'tagList' && filteredTags.map((content) => (
                            <TagListElem id={content.id} tag={content.tag} level={content.level} progress={content.progress} lastStudy={content.lastStudy} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default List;