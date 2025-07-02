'use client';
import React from 'react';
import Button from '../ui/Button';
import Dropdown from '../ui/Dropdown';

interface DropdownOption {
  value: string;
  label: string;
}

interface HeaderProps {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  onClearSearch?: () => void;
  searchResultsCount?: number;
  totalCount?: number;
  className?: string;
  [key: string]: any;
}

const Header: React.FC<HeaderProps> = ({ 
  searchQuery = '',
  onSearchChange,
  onClearSearch,
  searchResultsCount,
  totalCount,
  className = '', 
  ...props 
}) => {
  const leadOptions: DropdownOption[] = [
    { value: 'all-leads', label: 'All Leads' },
    { value: 'active-leads', label: 'Active Leads' },
    { value: 'closed-leads', label: 'Closed Leads' }
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (onSearchChange) {
      onSearchChange(value);
    }
  };

  const handleClearSearch = () => {
    if (onClearSearch) {
      onClearSearch();
    }
  };

  const handleAddLead = () => {
    console.log('Add lead clicked');
  };

  const handleExport = () => {
    console.log('Export clicked');
  };

  return (
    <header 
      className={`
        w-full
        bg-global-5
        border-b border-gray-200
        px-4 sm:px-6 lg:px-8
        py-3 sm:py-4
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      {...props}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
        {/* Left Section - Title and Dropdown */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Dropdown
            placeholder="All Leads"
            options={leadOptions}
            className="text-xl sm:text-2xl lg:text-3xl font-semibold text-global-3"
            leftImage={{
              src: '/images/img_usersaltstreamlineunicons_black_900.svg',
              width: 24,
              height: 22
            }}
            rightImage={{
              src: '/images/img_anglesmallright_1_gray_600.svg',
              width: 18,
              height: 22
            }}
          />
        </div>

        {/* Right Section - Search and Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
          {/* Search Bar */}
          <div className="relative flex-1 sm:flex-none sm:w-64 lg:w-80">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img 
                src="/images/img_search.svg" 
                alt="Search" 
                className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
              />
            </div>
            <input
              type="text"
              placeholder="Search leads..."
              value={searchQuery}
              onChange={handleSearch}
              className={`
                w-full
                pl-10 ${searchQuery ? 'pr-20' : 'pr-12'}
                py-2 sm:py-3
                text-sm sm:text-base
                text-gray-900
                placeholder-gray-500
                bg-global-4
                border border-gray-200
                rounded-[8px]
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:border-blue-500
                transition-all duration-200
                ${searchQuery ? 'border-blue-300' : ''}
              `}
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center gap-2">
              {/* Search Results Indicator */}
              {searchQuery && searchResultsCount !== undefined && totalCount !== undefined && (
                <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                  {searchResultsCount}/{totalCount}
                </span>
              )}
              
              {/* Clear Search Button */}
              {searchQuery && onClearSearch && (
                <button
                  onClick={handleClearSearch}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  title="Clear search"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              
              {/* Keyboard Shortcut - only show when not searching */}
              {!searchQuery && (
                <span className="text-xs sm:text-sm text-header-1 font-medium">
                  ⌘/
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              variant="light"
              size="md"
              onClick={handleAddLead}
              leftImage={{
                src: '/images/img_iconoirplus_gray_900.svg',
                width: 16,
                height: 16
              }}
              className="flex-1 sm:flex-none"
            >
              Add Lead
            </Button>

            <button
              onClick={handleExport}
              className="
                p-2 sm:p-3
                bg-global-4
                border border-gray-200
                rounded-[6px]
                hover:bg-gray-100
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                transition-all duration-200
              "
              aria-label="Export data"
            >
              <img 
                src="/images/img_down_to_line_1.svg" 
                alt="Export" 
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;