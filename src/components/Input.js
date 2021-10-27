import React from 'react';
// import classes from '../styles/Input.module.css';

const Input = (props) => {
  return (
    <div>
      <input
        type='text'
        placeholder='Search for an artist'
        value={props.searchTerm}
        onChange={(e) => props.setSearchTerm(e.target.value)}
      ></input>
    </div>
  );
};

export default Input;
