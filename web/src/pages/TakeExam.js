import { useState } from 'react';
import ExamNav from '../components/takeExam/ExamNav';
import ExamContent from '../components/takeExam/ExamContent';
import 'react-splitter-layout/lib/index.css';
import styled from '@emotion/styled';
import ExamCode from '../components/takeExam/ExamCode';

const TakeExamContainer = styled.div`
    display: flex;
    height: 100%;
    text-align: -webkit-center;
`;

function TakeExam() {
    const [probNum, setProbNum] = useState(1);
    const [examCodeVisible, setExamCodeVisible] = useState(false);
    const [codeState, setCodeState] = useState('loading'); // 'loading', 'write', 'result
    const [probResult, setProbResult] = useState({
        1: 0,
        2: 1,
        3: 2,
        4: 0
    }); // 0: not yet, 1: correct, 2: wrong

    
    return (
        <TakeExamContainer>
            <ExamNav 
                probList={probList}
                probNum={probNum}
                setProbNum={setProbNum}
                probResult={probResult}
                setExamCodeVisible={setExamCodeVisible}
                examCodeVisible={examCodeVisible}
                setCodeState={setCodeState}

            />
            <ExamContent
                probList={probList}
                probNum={probNum}
                setProbNum={setProbNum}
                probResult={probResult}
                setProbResult={setProbResult}
            />
            <ExamCode
                setExamCodeVisible={setExamCodeVisible}
                examCodeVisible={examCodeVisible}
                codeState={codeState}
                setCodeState={setCodeState}
            />
        </TakeExamContainer>
    );
};

export default TakeExam;

const probList = [
    {
        id: 1,
        title: 'A + B',
        description: 'This is an algorithmic description of the problem. Write a program that outputs A+B after receiving the two integers A and B. I hope you have a great time solving algorithm problems.',
        time: 2,
        memory: 128,
        score: 100,
        input: 'A and B are given in the first row. (0 < A, B < 10)',
        output: 'Print A+B on the first line.',
        example: [
            {
                input: '1 2',
                output: '3'
            },
            {
                input: '3000 4000',
                output: '7000'
            },
            {
                input: '5 5',
                output: '10'
            },
            {
                input: '10 10',
                output: '20'
            }
        ]
    },
    {
        id: 2,
        title: 'A - B',
        description: 'This is an algorithmic description of the problem. Write a program that outputs A-B after receiving the two integers A and B. I hope you have a great time solving algorithm problems.',
        time: 2,
        memory: 128,
        score: 100,
        input: 'A and B are given in the first row. (0 < A, B < 10)',
        output: 'Print A-B on the first line.',
        example: [
            {
                input: '1 2',
                output: '-1'
            },
            {
                input: '3000 4000',
                output: '-1000'
            },
            {
                input: '5 5',
                output: '0'
            },
            {
                input: '10 10',
                output: '0'
            }
        ]
    },
    {
        id: 3,
        title: 'A * B',
        description: 'This is an algorithmic description of the problem. Write a program that outputs A*B after receiving the two integers A and B. I hope you have a great time solving algorithm problems.',
        time: 2,
        memory: 128,
        score: 100,
        input: 'A and B are given in the first row. (0 < A, B < 10)',
        output: 'Print A*B on the first line.',
        example: [
            {
                input: '1 2',
                output: '2'
            },
            {
                input: '3000 4000',
                output: '12000000'
            },
            {
                input: '5 5',
                output: '25'
            },
            {
                input: '10 10',
                output: '100'
            }
        ]
    },
    {
        id: 4,
        title: 'A / B',
        description: 'This is an algorithmic description of the problem. Write a program that outputs A/B after receiving the two integers A and B. I hope you have a great time solving algorithm problems.',
        time: 2,
        memory: 128,
        score: 100,
        input: 'A and B are given in the first row. (0 < A, B < 10)',
        output: 'Print A/B on the first line.',
        example: [
            {
                input: '1 2',
                output: '0.5'
            },
            {
                input: '3000 4000',
                output: '0.75'
            },
            {
                input: '5 5',
                output: '1'
            },
            {
                input: '10 10',
                output: '1'
            }
        ]
    },
]