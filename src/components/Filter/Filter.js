import css from './Filter.module.css';
import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'showAll', label: 'Show all' },
  { value: 'follow', label: 'Follow' },
  { value: 'followings', label: 'Followings' },
];

export const Filter = ({ onChange }) => {
    const [selectedOption, setSelectedOption] = useState('showAll');

  const handleChange = newOption => {
   
      if (newOption.value !== selectedOption) {
        setSelectedOption(newOption.value);

        onChange(newOption);
      }
    };
       return (
         <div className={css.select}>
           <Select
             options={options}
             onChange={handleChange}
             value={options.find(option => option.value === selectedOption)}
           />
         </div>
       );
};

