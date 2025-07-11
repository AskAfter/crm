'use client';
import React, { useState, useRef, useEffect } from 'react';

interface DropdownOption {
  value: string;
  label: string;
}

interface ImageProps {
  src: string;
  width?: number;
  height?: number;
}

interface DropdownProps {
  placeholder?: string;
  options?: DropdownOption[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  leftImage?: ImageProps;
  rightImage?: ImageProps;
  [key: string]: any;
}

const Dropdown: React.FC<DropdownProps> = ({
  placeholder = 'Select option',
  options = [],
  value,
  onChange,
  disabled = false,
  className = '',
  leftImage,
  rightImage,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>(value || '');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (option: DropdownOption) => {
    setSelectedValue(option.value);
    setIsOpen(false);
    if (onChange) {
      onChange(option.value);
    }
  };

  const selectedOption = options.find(opt => opt.value === selectedValue);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`
          inline-flex
          items-center
          justify-between
          px-3 py-2 sm:px-4 sm:py-3
          text-sm sm:text-base
          text-left
          bg-white
          border
          border-gray-300
          rounded-[8px]
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:border-blue-500
          transition-all
          duration-200
          min-w-[100px]
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:border-gray-400'}
          ${className}
        `.trim().replace(/\s+/g, ' ')}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        {...props}
      >
        <div className="flex items-center gap-2 sm:gap-3">
          {leftImage && (
            <img 
              src={leftImage.src} 
              alt="" 
              className="w-4 h-4 sm:w-5 sm:h-5" 
              width={leftImage.width} 
              height={leftImage.height}
            />
          )}
          <span className={`whitespace-nowrap ${selectedValue ? 'text-gray-900' : 'text-gray-500'}`}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>
        
        {rightImage && (
          <img 
            src={rightImage.src} 
            alt="" 
            className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            width={rightImage.width} 
            height={rightImage.height}
          />
        )}
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full min-w-[150px] mt-1 bg-white border border-gray-300 rounded-[8px] shadow-lg max-h-60 overflow-auto">
          {options.length === 0 ? (
            <div className="px-3 py-2 sm:px-4 sm:py-3 text-sm text-gray-500">
              No options available
            </div>
          ) : (
            options.map((option, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleSelect(option)}
                className={`
                  w-full
                  px-3 py-2 sm:px-4 sm:py-3
                  text-sm sm:text-base
                  text-left
                  hover:bg-gray-50
                  focus:bg-gray-50
                  focus:outline-none
                  transition-colors
                  duration-150
                  ${selectedValue === option.value ? 'bg-blue-50 text-blue-700' : 'text-gray-900'}
                  ${index === 0 ? 'rounded-t-[8px]' : ''}
                  ${index === options.length - 1 ? 'rounded-b-[8px]' : ''}
                `.trim().replace(/\s+/g, ' ')}
                role="option"
                aria-selected={selectedValue === option.value}
              >
                {option.label}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;