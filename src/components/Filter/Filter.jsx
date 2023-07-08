import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    const filterValue = event.target.value;
    dispatch(setFilter(filterValue));
  };

  return (
    <div style={{ backgroundColor: 'purple', borderBottom: '2px groove white' }}>
      <h2 style={{textAlign: 'center', color: 'white'}}>Шукати контакти:</h2> 
      <br />
      <input
        type="text"
        style={{ marginTop: '5px', padding: '5px', border: '1px solid #ccc', borderRadius: '4px', marginLeft: '820px', marginBottom: '20px' }}
        onChange={handleFilterChange}
        placeholder="шукати..."
      />
    </div>
  );
};

export default Filter;
