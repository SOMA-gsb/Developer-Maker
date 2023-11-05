import Select from 'react-select';
import { triangleUp } from '../../assets/takeExam';
import './ExamSelect.css'

function DropdownIndicator(props) {
    return (
        <div {...props}>
            <img src={triangleUp} alt="triangleUp" className="take-exam-triangle-up" />
        </div>
    );
};

function Option({ data, ...props }) {
    const resultClass = data.result == 1 ? 'correct' : 'wrong';
    const resultContent = data.result == 1 ? 'CORRECT' : 'WRONG';

    return (
        <div {...props} className='take-exam-result-list'>
            <div className={`take-exam-result-list-item ${resultClass}`}>
                <div className='take-exam-result-list-item-result'>{resultContent}</div>
                <div className='take-exam-result-list-item-time'>{data.time}</div>
                {data.detail == '' ? null : 
                <div className='take-exam-result-list-item-detail'>{data.detail}</div>}
            </div>
        </div>
    );
};

function SingleValue({ data, ...props }) {
    return (
        <div {...props} className='exam-result-list-title'>Result</div>
    );
};


function ExamSelect({ type, resultList, setLanguage, languageOptions }) {
    const resultProps = {
        options: resultList,
        components: {
            DropdownIndicator,
            Option,
            SingleValue,
            IndicatorSeparator: () => null
        }
    }

    const languageProps = {
        options: languageOptions,
        components: {
            DropdownIndicator,
            IndicatorSeparator: () => null
        },
        onChange: (option) => setLanguage(option.value)
    }

    const commonProps = {
        isSearchable: false,
        menuPlacement: 'top',
        classNamePrefix: "react-select",
        theme: (theme) => ({
            ...theme,
            borderRadius: 7,
            colors: {
                ...theme.colors,
                primary: "#76AED6",
                primary25: "#e8ebed",
                primary50: "#e8ebed",
            }
        }),
    }

    return (
        <Select
            className={`take-exam-code-select ${type == 'result' ? 'exam-result-list' : ''}`}
            defaultValue={type == 'result' ? resultList[0] : languageOptions[0]}
            {...(type == 'result' ? resultProps : languageProps)}
            {...commonProps}
        />
    );
};

export default ExamSelect;