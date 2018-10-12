import styled from 'styled-components';

const Wrapper = styled.div`
    align-items: center;
    background-color: ${props => props.theme.color.blue.dark};
    background-position: center;
    background-size: cover;
    box-shadow: ${props => props.theme.shadow};
    display: flex;
    grid-area: header;
    justify-content: space-between;
`;

export default Wrapper;
