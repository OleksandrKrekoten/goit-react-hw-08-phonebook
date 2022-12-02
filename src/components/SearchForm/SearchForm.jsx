import { useDispatch } from 'react-redux';
import { filteredContacts } from 'redux/contacts/filterSlice';
import { Icon, Input } from './SearchForm.styled';
import { BsSearch } from 'react-icons/bs';
export const SearchForm = () => {
    const dispatch = useDispatch();
    return (
        <div style={{ position: 'relative' }}>
            <Input
                type="text"
                onChange={e => dispatch(filteredContacts(e.target.value))}
                placeholder="Search"
            />
            <Icon>
                <BsSearch />
            </Icon>
        </div>
    );
};
