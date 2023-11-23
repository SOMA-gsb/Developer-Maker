import { Rnd } from 'react-rnd';
import { algorithmIcon, languageIcon, loadingBrightIcon, loadingIcon, noteIcon, deleteIcon, searchIcon, triangleDown } from '../../assets/takeExam';
import Select from 'react-select';
import './ExamCode.css';
import { useState } from 'react';
import { CopyBlock, tomorrow } from "react-code-blocks";

function DropdownIndicator(props) {
    return (
        <div {...props}>
            <img src={triangleDown} alt="triangleDown" className="take-exam-triangle-down" />
        </div>
    );
};

function ExamCode({ setExamCodeVisible, examCodeVisible, setCodeState, codeState }) {
    const [language, setLanguage] = useState(languageOptions[0]);
    const [algorithm, setAlgorithm] = useState('');
    const [explanation, setExplanation] = useState('');
    const [exampleCode, setExampleCode] = useState('');
    const [theory, setTheory] = useState('');

    const style = {
        control: base => ({
          ...base,
          border: 0,
          boxShadow: 'none'
        })
    };

    const selectProps = {
        options: languageOptions,
        components: {
            DropdownIndicator,
            IndicatorSeparator: () => null
        },
        onChange: (option) => setLanguage(option.value),
        isSearchable: false,
        classNamePrefix: "react-select",
        theme: (theme) => ({
            ...theme,
            borderRadius: 7,
            colors: {
                ...theme.colors,
                primary: "#696969",
                primary25: "#e8ebed",
                primary50: "#e8ebed",
            }
        }),
    }

    function searchExamCodeBtn() {
        setCodeState('write');
        // fetch('/get_example_code', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Access-Control-Allow-Credentials': true
        //     },
        //     body: JSON.stringify({
        //         language: language,
        //         tag: algorithm
        //     })
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log('Success:', data);
        //     setExplanation(data.code_explanation);
        //     setExampleCode(data.example_code);
        //     setTheory(data.theory);
        //     // setProbList(data);
        //     setCodeState('result');
        // })
        // .catch((error) => {
        //     console.error('Error:', error);
        // });
        setTimeout(() => {
            setExplanation('This is an algorithmic description of the problem. Write a program that outputs A+B after receiving the two integers A and B. I hope you have a great time solving algorithm');
            // setExampleCode('public class Main { public static void main(String[] args) { System.out.println("Hello World!"); } }');
            setExampleCode(`
from collections import deque

def bfs(graph, root):
    visited = []
    queue = deque([root])

    while queue:
        n = queue.popleft()
        if n not in visited:
            visited.append(n)
            queue += graph[n] - set(visited)
    return visited

graph = {'A': set(['B', 'C']),
        'B': set(['A', 'D', 'E']),
        'C': set(['A', 'F']),
        'D': set(['B']),
        'E': set(['B', 'F']),
        'F': set(['C', 'E'])}

print(bfs(graph, 'A'))  # ['A', 'B', 'C', 'E', 'D', 'F']
`);
            setTheory('This is an algorithmic description of the problem. Write a program that outputs A+B after receiving the two integers A and B. I hope you have a great time solving algorithm');
            setCodeState('result');
        }, 1000)
    };

    const copyBlockProps = {
        text: exampleCode,
        language: language.value,
        // showLineNumbers: 10,
        // startingLineNumber: 0,
        wrapLines: false,
        theme: tomorrow,
    };

    return (
        <Rnd className={`exam-code ${examCodeVisible ? 'visible' : 'un'}`}>
            <div className='exam-code-title'>
                <img src={noteIcon} className='exam-code-icon' />
                <div>Exam Code</div>
                <img src={deleteIcon} className='exam-code-exit' onClick={() => setExamCodeVisible(!examCodeVisible)} />
            </div>

            <div className='exam-code-search'>
                <div className='exam-code-inputs'>
                    <div className='exam-code-input'>
                        <img src={algorithmIcon} className='exam-code-algo-icon' />
                        <input className='exam-code-algo-input' placeholder='Enter Algorithm' onChange={(e) => setAlgorithm(e.target.value)} />
                    </div>
                    <div className='exam-code-input'>
                        <img src={languageIcon} className='exam-code-lang-icon' />
                        <Select className='exam-code-lang-select' defaultValue={languageOptions[0]} {...selectProps} styles={style} />
                    </div>
                </div>
                <div className='exam-code-search-btn' onClick={searchExamCodeBtn}>
                    <img src={searchIcon} />
                    Search
                </div>
            </div>

            <div className={`exam-code-result ${codeState}`}>
                {codeState === 'loading' &&
                    <div className='exam-code-loading'>
                        <img src={loadingIcon} className='exam-code-loading-icon' />
                        <div>What algorithms are you curious about?</div>
                    </div>
                }
                {codeState === 'write' &&
                    <div className='exam-code-loading write'>
                        <img src={loadingBrightIcon} className='exam-code-loading-icon' />
                        <div>Writing example code . . .</div>
                    </div>
                }
                {codeState === 'result' &&
                    <>
                        &nbsp;{explanation}
                        <br />
                        {/* {exampleCode} */}
                        <CopyBlock {...copyBlockProps} />
                        <br />
                        &nbsp;{theory}
                    </>
                }
            </div>
        </Rnd>
    )
};

export default ExamCode;

const languageOptions = [
    { value: 'java', label: 'Java' },
    { value: 'c++', label: 'C++' },
    { value: 'python', label: 'Python' },
    { value: 'javascript', label: 'Javascript' },
    { value: 'c', label: 'C' },
    { value: 'c#', label: 'C#' },
    { value: 'swift', label: 'Swift' },
    { value: 'kotlin', label: 'Kotlin' },
    { value: 'ruby', label: 'Ruby' },
    { value: 'scala', label: 'Scala' },
    { value: 'r', label: 'R' },
    { value: 'go', label: 'Go' },
];