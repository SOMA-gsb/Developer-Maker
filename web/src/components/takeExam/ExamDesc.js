import DescTitle from './DescTitle';
import DescDetail from './DescDetail';
import styled from '@emotion/styled';

const ExamDescWrapper = styled.div`
    padding: 2rem 1.4rem;
    overflow: auto;
`;

function ExamDesc({ title, description, time, memory, score, input, output, example }) {
    return (
        <ExamDescWrapper>
            <DescTitle
                title={title}
                time={time}
                memory={memory}
                score={score}
            />
            <DescDetail
                description={description}
                input={input}
                output={output}
                example={example}
            />
        </ExamDescWrapper>    
    );
};

export default ExamDesc;