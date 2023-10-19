import { useDispatch } from 'react-redux';
import { ListItemContainer, DeleteBtn } from './ContactItem.styled';
import { deleteContact } from 'redux/operations';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ListItemContainer>
      <h3>{name}: </h3>
      <p>{number}</p>
      <DeleteBtn type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DeleteBtn>
    </ListItemContainer>
  );
};
