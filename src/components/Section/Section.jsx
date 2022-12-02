import PropTypes from 'prop-types';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';
import { Loader } from 'components/Loader/Loader';
import { Wrapper, Title, SectionContacts } from './Section.styled';

export const Section = ({ title, children }) => {
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    return (
        <SectionContacts>
            <Wrapper>
                <Title>{title}</Title>
                {isLoading && !error && <Loader />}
            </Wrapper>
            {children}
        </SectionContacts>
    );
};
Section.propTypes = {
    title: PropTypes.string.isRequired,
};
