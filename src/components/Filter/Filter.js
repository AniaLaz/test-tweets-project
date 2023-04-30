import css from './Filter.module.css';
import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'showAll', label: 'Show all' },
  { value: 'follow', label: 'Follow' },
  { value: 'followings', label: 'Followings' },
];

export const Filter = ({ onChange }) => {
       return (
    <div className={css.select}>
      <Select options={options} onChange={onChange} />
    </div>
  );
};

