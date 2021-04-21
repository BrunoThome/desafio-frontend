import React from 'react';

const Select = ({
  label,
  name,
  options,
  value,
  onChange,
  onBlur,
  error,
  setValue,
  validate,
  ...props
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      >
        <option value="" disabled>
          Selecione uma opção
        </option>
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Select;
