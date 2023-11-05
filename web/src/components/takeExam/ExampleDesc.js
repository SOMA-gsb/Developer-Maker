import { triangleDown } from '../../assets/takeExam';
import './ExampleDesc.css';

function ExampleTitle({ title }) {
    return (
        <div>
            {title}
            <img src={triangleDown} alt="triangleDown" />
        </div>
    );
};

function ExampleDesc({ example }) {
    return (
        <>
            <div className="take-exam-content-desc-title">Example</div>
            <div className='take-exam-content-ex-title'>
                <ExampleTitle title='Input' />
                <ExampleTitle title='Output' />
            </div>
            {example.map((ex) => (
                <div className='take-exam-content-ex'>
                    <div>{ex.input}</div>
                    <div>{ex.output}</div>
                </div>
            ))}
        </>
    );
};

export default ExampleDesc;