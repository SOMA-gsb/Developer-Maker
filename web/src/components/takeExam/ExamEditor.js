import { useState } from 'react';
import Editor from '@monaco-editor/react';
import ExamSelect from './ExamSelect';
import './ExamEditor.css';

function ExamEditor() {
    const [language, setLanguage] = useState(languageOptions[0]);
    
    return (
        <div className="take-exam-code">
            <Editor 
                language={language}
                options={options}
            />
            <div className="take-exam-code-btns">
                <ExamSelect
                    type='result'
                    resultList={resultList}
                />
                <ExamSelect 
                    type='language'
                    setLanguage={setLanguage}
                    languageOptions={languageOptions}
                />
                <div className="take-exam-code-btn">SUBMIT</div>
            </div>
        </div>
    );
};

export default ExamEditor;

const options = {
    autoIndent: 'full',
    contextmenu: true,
    fontFamily: 'monospace',
    fontSize: 13,
    lineHeight: 24,
    hideCursorInOverviewRuler: true,
    matchBrackets: 'always',
    minimap: {
        enabled: true,
    },
    scrollbar: {
        horizontalSliderSize: 4,
        verticalSliderSize: 18,
    },
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    cursorStyle: 'line',
    automaticLayout: true,
}; 

const languageOptions = [
    { value: 'java', label: 'Java' },
    { value: 'cpp', label: 'C++' },
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

const resultList = [
    { id: 1, result: 1, time : '01:00:30', detail: '' },
    { id: 2, result: 0, time : '00:30:45', detail: 'Wrong Answer' },
    { id: 3, result: 0, time : '00:27:30', detail: 'Segmentation Fault' },
    { id: 4, result: 1, time : '00:25:16', detail: '' },
    { id: 5, result: 0, time : '00:07:15', detail: 'Time Limit Exceeded' },
    { id: 6, result: 0, time : '00:05:16', detail: 'Memory Limit Exceeded' },
]