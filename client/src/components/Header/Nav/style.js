import styled from 'styled-components';

export const Wrapper = styled.nav`
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: ${props => props.theme.color.blue.dark};

    @media (max-width: 600px) {
        ${props => !props.toogle && 'display: none;'};
    }
`;

export default Wrapper;
