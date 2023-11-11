import { attendanceIcon, growthIcon } from "../../assets/mypage";
import TagGraph from "./TagGraph";
import ReportGraph from "./ReportGraph";
import UserDetail from "./UserDetail";
import './Analysis.css'
import List from "../common/List";

function Analysis(props) {
    return(
        <div id="mypage-content">
            <div id="mypage-detail-contents">
                <UserDetail type="figure" icon={attendanceIcon} title="31" subtitle="Cumulative Attendance" />
                <UserDetail type="figure" icon={growthIcon} title="750" subtitle="Today's Growth Figures" />
                <UserDetail type="progress" title="63%" subtitle="Goal Achievement" />
                <UserDetail type="progress" class="mypage-ranking" title="Top 31%" subtitle="Current Ranking" />
            </div>

            <div id="mypage-graphs">
                <TagGraph />
                <ReportGraph />
            </div>

            <div id="mypage-list">
                <div className="mypage-list-title-bar">
                    <div className="mypage-list-title">Level by Algorithm Tag</div>
                    <div className="mypage-list-btn">upper</div>
                </div>
                <List class="analysis-list" type="tagList" heads={props.tagTableHeads} contents={props.algorithmTags} query="" sortType="High level" />
            </div>
        </div>
    );
};

export default Analysis;