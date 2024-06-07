import React from 'react';
import './style.css'

interface DropdownProps {
  options: string[];
  placeholder: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, placeholder}) => {
  const [selectedOption, setSelectedOption] = React.useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
  };

  return (
    <div className='dropdown-container'>
      <select value={selectedOption ?? ""} 
      onChange={handleChange}
      className='dropdown-select'>
        <option value="" disabled>{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option} className="dropdown-option">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
