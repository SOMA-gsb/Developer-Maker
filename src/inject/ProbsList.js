import Prob from "./Prob";
import classes from "./ProbsList.module.css";

function ProbsList({ num, name }) {
    const probs = [[1001, "A-B"], [1008, "A/B"], [2558, "A+B - 2"], [10950, "A+B - 3"], [10952, "A+B - 5"]];

    return (
        <ul className="dropdown-menu {classes.recommendProb}">
            {probs.map((prob) => <Prob num={prob[0]} name={prob[1]} />)}
        </ul>
    );
}

export default ProbsList;