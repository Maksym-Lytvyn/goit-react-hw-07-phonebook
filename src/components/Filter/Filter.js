import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { setFilter } from 'redux/actions';

// const Filter = ({ value, onChange }) => {
const Filter = () => {

  const dispatch = useDispatch();
  const value = useSelector(state => state.contacts.filter);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div style={{marginLeft: '45%', marginTop: '1%', display: 'block', color: 'white'}}>
      Шукати контакт за іменем:
      <br />
      <br />
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="search..."
      />
    </div>
  );
};

// const mapStateToProps = state => ({
//   value: state.filter,
// })

// const mapDispatchToProps = dispatch => ({
//   onChange: event => dispatch(setFilter(event.target.value)),
// });

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
export default Filter;
// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
