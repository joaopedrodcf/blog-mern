import styled from 'styled-components';

const borderRadius = props => props.theme.space.md;
const shadowBlack = props => props.theme.shadow.black;
const colorWhite = props => props.theme.color.white;
const colorBlack = props => props.theme.color.black;

export const Wrapper = styled.div`
    width: 100%;
    background-color: ${colorWhite};
    display: flex;
    position: relative;
    box-shadow: ${shadowBlack};

    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

export const WrapperTitle = styled.div`
    position: absolute;
    background-color: ${props => props.theme.color.blue.dark};
    color: ${props => props.theme.color.white};
    top: ${props => props.theme.space.lg};
    left: -${props => props.theme.space.lg};
    padding: ${props => props.theme.space.sm} ${props => props.theme.space.xl};
    text-transform: uppercase;
    box-shadow: ${shadowBlack};
`;

export const Form = styled.form`
    padding: ${props => props.theme.space.xxl} ${props => props.theme.space.xl}
        ${props => props.theme.space.xl} ${props => props.theme.space.xl};
    border-radius: ${borderRadius};
    display: flex;
    flex-direction: column;
    color: ${colorBlack};
    z-index: 2;
    width: 100%;

    > h1 {
        text-align: center;
    }

    @media (max-width: 800px) {
        width: 100%;
    }
`;
export const Column = styled.div`
    flex: 1;
    position: relative;
`;

export const Figure = styled.img`
    max-width: 50%;
    max-height: 20%;
    object-fit: cover;

    @media (max-width: 800px) {
        position: absolute;
        z-index: -1; /* To test */
        right: 0;
    }
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.color.blue.dark};
    font-size: ${props => props.theme.typography.md};
    margin-top: ${props => props.theme.space.xl};
`;

export const ErrorLabel = styled.span`
    margin-bottom: 1rem;

    > div {
        color: ${props => props.theme.color.red.light};
        font-size: ${props => props.theme.typography.xxs};
    }
`;

export const Button = styled.button`
    grid-area: button;
    box-shadow: ${shadowBlack};
    border: none;
    background-color: ${props => props.theme.color.blue.default};
    padding: 15px;
    margin: 10px 0;
    color: ${colorWhite};
    margin-top: ${props => props.theme.space.xxl};
    border-radius: ${props => props.theme.space.xl};

    &:disabled,
    &[disabled]:hover {
        background-color: ${props => props.theme.color.gray.dark};
        transform: scale(1);
        color: ${colorWhite};
    }

    &:hover {
        transform: scale(1.01);
        background-color: ${props => props.theme.color.blue.dark};
    }
`;

export const WrapperButton = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const Input = styled.input`
    border: none;
    background: transparent;
    border-bottom: 1px solid ${props => props.theme.color.gray.light};
    outline: none;
    padding: ${props => props.theme.space.md} 0;
    font-size: ${props => props.theme.typography.xs};
    box-shadow: none;

    :focus {
        border-bottom: 1px solid ${props => props.theme.color.blue.default};
    }

    :invalid {
        border-bottom: 1px solid ${props => props.theme.color.red.light};
    }

    :required {
    }
`;

export const TextArea = styled.textarea`
    border: none;
    background: transparent;
    border-bottom: 1px solid ${props => props.theme.color.gray.light};
    outline: none;

    :focus {
        border-bottom: 1px solid ${props => props.theme.color.blue.default};
    }
`;

export const Alert = styled.div`
    box-shadow: ${shadowBlack};
    padding: 10px;
    border-radius: ${borderRadius};
    text-align: center;
    ${props =>
        !props.error && `background-color:  ${props.theme.color.red.light};`};
    ${props =>
        props.error &&
        `background-color:  ${props.theme.color.blue.default};`};};
`;

export const Image = styled.img`
    border-radius: ${borderRadius};
    ${props => props.src && 'width: 20rem;height: 20rem;'};
    background-color: ${props => props.theme.color.gray.dark};
`;

export const LabelFile = styled.label`
    box-shadow: ${props => props.theme.shadow.dark};
    border: none;
    background-color: ${props => props.theme.color.blue.default};
    padding: ${props => props.theme.space.lg};
    margin: ${props => props.theme.space.md} 0;
    border-radius: ${borderRadius};
    text-align: center;
    cursor: pointer;
    color: ${props => props.theme.color.white};

    &:hover {
        transform: scale(1.01);
        background-color: ${props => props.theme.color.blue.dark};
    }

    > input[type='file'] {
        width: 100%;
        height: 100%;
        display: none;
    }
`;
