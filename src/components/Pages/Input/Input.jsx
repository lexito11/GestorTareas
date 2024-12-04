import React from 'react';
import './Input.css';

const Input = ({ value, onChange, placeholder }) => {
  return (
    <div className="input-container">
      <input 
        type="text" 
        className="input-field"
        value={value} 
        onChange={onChange} 
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
