import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: ${props => props.theme.color.blue.dark};
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: 10;
    ${props => !props.toogle && 'display: none;'};

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        a {
            margin: ${props => props.theme.space.lg} 0;
        }
    }
`;

export default Wrapper;
