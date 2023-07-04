// const initialState = {
//     contacts: [],
// }

// const contactReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'addContact':
//             return {
//                 ...state,
//                 contacts: [...state.contacts, action.payload]
//             };
//         case 'removeContact':
//             return {
//                 ...state,
//                 contacts: state.contacts.filter(contact => contact.id !== action.payload)
//             };
//         // case 'filterContacts':
//         //     return {
//         //         ...state,
//         //         contacts: state.contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
//         //     };
//         default:
//             return state;
//     }
// }

// export default contactReducer;