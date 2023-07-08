import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteContact } from 'redux/operations';

const DeleteConfirmation = ({ contact, onCancel }) => {
  const dispatch = useDispatch();

  const handleConfirmDelete = () => {
    dispatch(deleteContact(contact.id));
    if (deleteContact) {
      toast.success(`${contact.name} deleted`);
    }
    onCancel();
  };

  return (
    <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: 'purple', padding: '20px' }}>
        <p>Ви впевнені, що хочете видалити цей контакт?</p>
          <button style={{ backgroundColor: 'red', color: 'white', marginLeft: '65px', padding: '5px'}} onClick={handleConfirmDelete}>Видалити</button>
          <button style={{ backgroundColor: 'red', color: 'white', marginLeft: '45px', padding: '5px'}} onClick={onCancel}>Скасувати</button>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
