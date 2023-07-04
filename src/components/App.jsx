// import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
// import { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';

// import { setFilter } from 'redux/actions';
// import Notiflix from 'notiflix';

const App = () => {
  // const dispatch = useDispatch();
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem('contacts')) ?? [];
  // });
  // // const [filter, setFilter] = useState('');
  // const filter = useSelector(state => state.filter);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const handleAddContact = newContact => {
  //   const isExistingContact = contacts.some(
  //     contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
  //   );

  //   if (isExistingContact) {
  //     Notiflix.Notify.failure('Цей контакт уже було додано');
  //     return;
  //   }

  //   setContacts(prevContacts => [...prevContacts, newContact]);
  //   Notiflix.Notify.success('Контакт було успішно додано');
  // };

  // const handleDeleteContact = contactId => {
  //   setContacts(prevArray =>
  //     prevArray.filter(contact => contact.id !== contactId)
  //   );
  // };

  // const handleFilterChange = event => {
  //   dispatch(setFilter(event.target.value));
  // };

  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <div style={{ backgroundColor: 'purple', borderBottom: '2px groove white' }}>
      <h1 style={{textAlign: 'center', color: 'white'}}>Телефонний записник</h1>
      {/* <ContactForm contacts={contacts} onAddContact={handleAddContact} /> */}
      <ContactForm />
      <br />
      <h2 style={{textAlign: 'center', color: 'white'}}>Контакти</h2>
      {/* <Filter value={filter} onChange={handleFilterChange} /> */}
      <Filter />
      {/* <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      /> */}
      <br />
      <ContactList />
    </div>
  );
};

// App.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };
export default App;
