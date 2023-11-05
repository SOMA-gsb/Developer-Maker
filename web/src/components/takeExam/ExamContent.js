import SplitterLayout from 'react-splitter-layout';
import ExamTitle from './ExamTitle';
import ExamDesc from './ExamDesc';
import ExamEditor from './ExamEditor';
import './ExamContent.css';

function ExamContent({ probList, probNum }) {
    const probInfo = probList[probNum - 1];

    return (
        <div className="take-exam-contents">
            <ExamTitle
                probNum={probNum}
                probTitle={probList[probNum - 1].title}
            />
            <SplitterLayout className="take-exam-content">
                <ExamDesc
                    title={probInfo.title}
                    description={probInfo.description}
                    time={probInfo.time}
                    memory={probInfo.memory}
                    score={probInfo.score}
                    input={probInfo.input}
                    output={probInfo.output}
                    example={probInfo.example}
                />
                <ExamEditor />
            </SplitterLayout>
        </div>
    );
};

export default ExamContent;


