function Prob({ num, name }) {
    const ref = `https://www.acmicpc.net/problem/${num}`
    return (
        <li>
            <a href={ref}>${num}번. ${name}</a>
        </li>
    );
}

export default Prob;