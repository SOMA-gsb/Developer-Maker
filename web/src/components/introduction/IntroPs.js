import styled from 'styled-components';

const IntroPsTitle = styled.div`
    color: #525252;
    font-weight: bold;
    font-size: 2rem;
    margin: 1vw 15vw 0vw 15vw;
`;

const IntroPsContent = styled.div`
    color: #545454;
    font-size: 1.2rem;
    margin-top: 1vw;
    padding-bottom: 12vw;
`;

function IntroPs() {
    return(
        <div id='introduction-ps'>
            <IntroPsTitle id='intro-ps-title'>
                Are You Ready To Study Algorithms Together?
            </IntroPsTitle>
            <IntroPsContent id='intro-ps-content'>
                Let’s Go Solve Algorithm Problems With Me !
            </IntroPsContent>
        </div>
    )
};

export default IntroPs;