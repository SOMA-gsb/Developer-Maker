import ExampleDesc from "./ExampleDesc";
import ContentDesc from "./ContentDesc";
import styled from "@emotion/styled";

const DescriptionElementWrapper = styled.div`
    text-align: left;
    padding: 0 0.5rem;
    margin-bottom: 0.7rem;
`;

function DescriptionElement({ title, content }) {
    return (
        <DescriptionElementWrapper>
            {title == 'Example' ?
            <ExampleDesc example={content} /> :
            <ContentDesc title={title} content={content} />}
        </DescriptionElementWrapper>
    );
}

function DescDetail({ description, input, output, example }) {
    return (
        <>
            <DescriptionElement title='Description' content={description} />
            <DescriptionElement title='Input' content={input} />
            <DescriptionElement title='Output' content={output} />
            <DescriptionElement title='Example' content={example} />
        </>
    );
};

export default DescDetail;