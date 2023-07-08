import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, addContact } from '../../redux/operations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getContacts, getError } from 'redux/selectors';

const notify = {
  error: message => toast.error(message),
  success: message => toast.success(message),
};

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const error = useSelector(getError);

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSubmit = event => {
    event.preventDefault();
    if (name.trim() !== '' && phone.trim() !== '') {
      const isExistingContact = contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (isExistingContact) {
        toast.error(`${name} is already in contacts`);
        return;
      }

      if(error) {
        notify.error('problem with server');
        return;
      }

      dispatch(addContact({ name, phone }));
      notify.success(`${name} adding to contacts`);
      reset();
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <section>
      <ToastContainer />
      
      {error && <p>Не вдалося завантажити контакти.</p>}
      <form style={{ display: 'flex', flexDirection: 'column',  alignItems: 'start',  width: '300px', margin: '0 auto' }} onSubmit={handleSubmit}>
        <label style={{ fontWeight: 'bold', color: 'white', marginBottom: '10px' }} htmlFor="name">Ім'я:</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '4px'}}
          onChange={handleInputChange}
        />
        <label style={{ fontWeight: 'bold', color: 'white', marginBottom: '10px' }} htmlFor="number">Номер:</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '4px'}}
          onChange={handleInputChange}
        />
        <br />
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: 'red',  color: '#fff',  border: 'none',  borderRadius: '4px', cursor: 'pointer' }}>Додати контакт</button>
      </form >
    </section>
  );
};

export default ContactForm;
