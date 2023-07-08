import React, { useState } from 'react';
import DeleteConfirmation from 'components/ContactItem/DeleteConfirmation/DeleteConfirmation';

const ContactItem = ({ contact }) => {
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);

  const handleDeleteClick = () => {
    setIsConfirmingDelete(true);
  };

  const handleCancelDelete = () => {
    setIsConfirmingDelete(false);
  };

  return (
    <li style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '100px', marginBottom: '20px' }}>
      <span style={{fontWeight: 'bold', color: 'white', marginRight: '20px'}}>{contact.name}</span>
      <span style={{fontWeight: 'bold', color: 'white', marginRight: '20px'}}>{contact.phone}</span>
      <button style={{backgroundColor: '#f00', color: '#fff',  border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '5px'}} onClick={handleDeleteClick}>Видалити</button>

      {isConfirmingDelete && (
        <DeleteConfirmation contact={contact} onCancel={handleCancelDelete} />
      )}
    </li>
  );
};

export default ContactItem;
