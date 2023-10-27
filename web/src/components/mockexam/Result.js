import { useState } from "react";
import List from "../common/List";
import './Result.css'

function Result() {
    const [page, setPage] = useState(1);
    const offset = (page - 1) * 5;
    const pageCount = Math.ceil(examResults.length / 5);

    return (
        <>
            <div>
                <div className="result-title">Result ({examResults.length})</div>
                <hr className="result-hr" />
            </div>
            <List offset={offset} type='examResult' heads={examHeads} contents={examResults} query='' sortType='Basic' />
            <div className="pagination">
                <div className="pagination-btn" onClick={() => setPage(page == 1 ? 1 : page - 1)}>{'<'}</div>
                {
                    [...Array(pageCount)].map((n, i) => (
                        <div className={`pagination-btn ${page == i + 1 ? 'active' : ''}`} onClick={() => setPage(i + 1)}>{i + 1}</div>
                    ))
                }
                <div className="pagination-btn" onClick={() => setPage(page == pageCount ? page : page + 1)}>{'>'}</div>
            </div>
        </>
    );
};

export default Result;

const examHeads = [
    {
        id: 1,
        name: 'Date Of Exam'
    },
    {
        id: 2,
        name: 'Average Level'
    },
    {
        id: 3,
        name: 'Score'
    },
    {
        id: 4,
        name: 'Top Percentage'
    }
]

const examResults = [
    {
        id: 1,
        date: '23.07.15',
        level: 5,
        score: 450,
        totalScore: 700,
        percentage: 45
    },
    {
        id: 2,
        date: '23.06.18',
        level: 6,
        score: 300,
        totalScore: 700,
        percentage: 61
    },
    {
        id: 3,
        date: '23.05.16',
        level: 1,
        score: 500,
        totalScore: 600,
        percentage: 30
    },
    {
        id: 4,
        date: '23.04.01',
        level: 2,
        score: 700,
        totalScore: 700,
        percentage: 10
    },
    {
        id: 5,
        date: '23.03.15',
        level: 3,
        score: 100,
        totalScore: 600,
        percentage: 79
    },
    {
        id: 6,
        date: '23.02.15',
        level: 5,
        score: 450,
        totalScore: 700,
        percentage: 45
    },
    {
        id: 7,
        date: '23.01.18',
        level: 6,
        score: 300,
        totalScore: 700,
        percentage: 61
    },
    {
        id: 8,
        date: '23.01.01',
        level: 1,
        score: 500,
        totalScore: 600,
        percentage: 30
    },
    {
        id: 9,
        date: '22.12.15',
        level: 2,
        score: 700,
        totalScore: 700,
        percentage: 10
    },
    {
        id: 10,
        date: '22.12.04',
        level: 3,
        score: 100,
        totalScore: 600,
        percentage: 79
    },
    {
        id: 11,
        date: '22.11.15',
        level: 5,
        score: 450,
        totalScore: 700,
        percentage: 45
    },
    {
        id: 12,
        date: '22.11.03',
        level: 6,
        score: 300,
        totalScore: 700,
        percentage: 61
    },
    {
        id: 13,
        date: '22.10.15',
        level: 1,
        score: 500,
        totalScore: 600,
        percentage: 30
    },
]