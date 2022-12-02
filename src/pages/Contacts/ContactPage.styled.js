import styled from '@emotion/styled';
 
export const FlexWrraper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;

    @media (min-width: 768px) {
        justify-content: space-around;
        flex-direction: row;
        padding: 80px;
    }
`;