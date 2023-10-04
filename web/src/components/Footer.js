import styled from 'styled-components';

const FooterContainer = styled.div`
    background-color: #545454;
    padding: 5rem 0 6rem 0;
`;

function Footer() {
    return (
        <FooterContainer>
            &copy; {new Date().getFullYear()} Developer Maker. All Rights Reserved.
        </FooterContainer>
    )
};

export default Footer;