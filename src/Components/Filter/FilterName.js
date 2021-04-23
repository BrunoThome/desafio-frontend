import React from 'react';

const FilterName = ({ placeholder, value, setValue }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={({ target }) => setValue(target.value)}
    />
  );
};

export default FilterName;
