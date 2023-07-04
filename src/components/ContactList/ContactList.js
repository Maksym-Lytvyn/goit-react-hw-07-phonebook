import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter)
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  }

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <ul>
      <h2 style={{textAlign: 'center', color: 'white'}}>Перелік контактів</h2>
      {filteredContacts.map(({ id, name, number }) => (
        <li
          key={id}
          style={{textAlign: 'center', marginTop: '15px', color: 'white'}}
          // name={name}
          // id={id}
          // number={number}
        >
          {name}: {number}
          <button onClick={() => handleDelete(id)} style={{marginLeft: '10px', backgroundColor: 'orange', color: 'white'}}>Видалити</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

// import PropType from 'prop-types';
// // import { connect } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';
// // const ContactList = ({ contacts, onDeleteContact }) => (
//   const ContactList = () => {
//     const contacts = useSelector(state => state.contacts.contacts);
//     const dispatch = useDispatch();

//     return (
//         <ul>
//           {contacts.map(({ id, name, number }) => (
//       <li key={id}
//       key={id}
//       name={name}
//       id={id}
//       number={number}
//       onClick={() => dispatch(deleteContact(id))}
//       >
//         {/* <span>{name}:</span>
//         <span>{number}</span> */}
//         {/* <button type="button" onClick={() => onDeleteContact(id)}> */}
//         {/* <button type="button" onClick={() => dispatch(deleteContact(id))}>
//           Delete
//         </button> */}
//           {name}: {number}
//       </li>
//     ))}
//   </ul>
// );
//       }
// // const mapStateToProps = state => {
// //   return {
// //     contacts: state.contacts.contacts,
// //   };
// // }

// // const mapDispatchToProps = dispatch => {
// //   return {
// //     onDeleteContact: (id) => dispatch({ type: 'removeContact', payload: id}),
// //   }
// // }

// // export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

// ContactList.propTypes = {
//   contacts: PropType.arrayOf(
//     PropType.shape({
//       id: PropType.string.isRequired,
//       name: PropType.string.isRequired,
//       number: PropType.string.isRequired,
//     })
//   ),
//   onDeleteContact: PropType.func.isRequired,
// };
