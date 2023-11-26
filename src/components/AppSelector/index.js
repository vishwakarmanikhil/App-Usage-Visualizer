import React from 'react';
import Select from 'react-select';
import './style.css';

const CustomSelect = (props) => {
  const { optionData, value, onChange, className } = props;

  const options = optionData.map((app) => ({
    value: app.id,
    label: app.name
  }));

  return (
    <Select 
      value={options[value - 1]}
      options={options}
      onChange={(e) => onChange(e?.value)}
      className={className}
      classNamePrefix={'select-custom'}
      isSearchable={false}
    />
  );
};

export default CustomSelect;