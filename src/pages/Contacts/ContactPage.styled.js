import styled from '@emotion/styled';
 
export const FlexWrraper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 320px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;

    @media (min-width: 768px) {
        max-width: 768px;

        padding: 80px;
    }
    @media (min-width: 1200px) {
        justify-content: space-around;
        flex-direction: row;
        max-width: 1200px;
        justify-content: space-around;
        flex-direction: row;
        padding: 80px;
    }
`;