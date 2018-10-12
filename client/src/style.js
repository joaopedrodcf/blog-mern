import styled from 'styled-components';

const Global = styled.div`
    display: grid;
    grid-template-columns: 3fr 10fr 3fr;
    grid-template-rows: 60px auto 90px;
    grid-template-areas: 'header header header' ' . main . ' 'footer footer footer';
    grid-gap: 20px;
    height: 100%;

    @media (max-width: 1200px) {
        grid-template-columns: 2fr 10fr 2fr;
    }

    @media (max-width: 600px) {
        grid-template-columns: 0.1fr 12fr 0.1fr;
    }
`;
export default Global;
