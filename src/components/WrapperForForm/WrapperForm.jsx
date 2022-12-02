import { Container, Wrraper } from './WrapperForm.styled';

export const WrapperForm = ({children}) => {
    return (
        <Container>
            <Wrraper>{children}</Wrraper>
        </Container>
    );
       
    
           
            
}