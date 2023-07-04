import { nanoid } from 'nanoid';
import { useState } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
// import PropTypes from 'prop-types';

// const ContactForm = ({ onAddContact }) => {
const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (name.trim() !== '' && number.trim() !== '') {
      const newContact = {
        id: nanoid(),
        name: name.trim(),
        number: number.trim(),
      };
      dispatch(addContact(newContact));
      setName('');
      setNumber('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{marginLeft: '45%', marginTop: '1%'}}>
      <label style={{color: 'white'}}>Ім'я:</label>
      <br />
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="number" style={{color: 'white'}}>Номер:</label>
      <br />
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChange}
      />
      <br />
      <br />
      <button type="submit" style={{backgroundColor: 'yellowgreen', color: 'white'}}>Додати контакт</button>
    </form>
  );
};

const mapDispatchtoProps = dispatch => {
  return {
    onAddContact: contact => dispatch({ type: 'addContact', payload: contact }),
  };
};

export default connect(null, mapDispatchtoProps)(ContactForm);
// ContactForm.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onAddContact: PropTypes.func.isRequired,
// };
