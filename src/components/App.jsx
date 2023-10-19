import { ContactForm } from 'components';
import { ContactList } from 'components';
import { Filter } from 'components';
import { Loader } from 'components';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      {isLoading && <Loader />}
      <div className="phoneBookContainer">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};
