import PropTypes from 'prop-types';
import { selectIsLoading, selectError } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { Loader } from 'components/Loader/Loader';
import { Wrapper, Title } from './Section.styled';

export const Section = ({ title, children }) => {
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    return (
        <section>
            <Wrapper>
                <Title>{title}</Title>
                {isLoading && !error && <Loader />}
            </Wrapper>
            {children}
        </section>
    );
};
Section.propTypes = {
    title: PropTypes.string.isRequired,
};
