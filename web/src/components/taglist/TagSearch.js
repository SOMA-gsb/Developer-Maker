import './TagSearch.css';
import { searchIcon } from "../../assets/taglist";

function TagSearch(props) {
    const sortTypes = ['Basic', 'High level', 'Low level'];

    return  (
        <div className="tag-search">
            <div className="tag-search-wrapper">
                <input className="tag-search-input" type="text" placeholder="Type Algorithm Tag" onChange={e => props.setQuery(e.target.value)} />
                <button className="tag-search-btn">
                    <img src={searchIcon} alt="search" />
                </button>
            </div>
            <select className="tag-search-sort" onChange={(e) => props.setSortType(e.target.value)}>
                {
                    sortTypes.map((sortType) => (
                        <option key={sortType}>{sortType}</option>
                    ))
                } 
            </select>
        </div>
    );
};

export default TagSearch;