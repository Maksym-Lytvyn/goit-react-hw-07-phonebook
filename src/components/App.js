import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';
import Loader from 'components/Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
    <div style={{ backgroundColor: 'purple', borderBottom: '2px groove white' }}>
      {isLoading && !error && <Loader />}
      <h2 style={{textAlign: 'center', color: 'white'}}>Телефонний записник</h2>
      <ContactForm />
      <h2 style={{textAlign: 'center', color: 'white'}}>Контакти</h2>
      <Filter />
      <ContactList />
    </div >
    </>
  );
};
