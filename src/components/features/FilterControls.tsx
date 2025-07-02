'use client';
import React from 'react';
import Dropdown from '../ui/Dropdown';

interface DropdownOption {
  value: string;
  label: string;
}

interface FilterControlsProps {
  statusFilterOptions?: DropdownOption[];
  viewOptions?: DropdownOption[];
  currentSort?: string;
  searchQuery?: string;
  statusFilter?: string;
  itemCount?: number;
  totalCount?: number;
  onStatusFilterChange?: (value: string) => void;
  onViewChange?: (value: string) => void;
  onClearSort?: () => void;
  className?: string;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  statusFilterOptions = [{ value: '', label: 'All Status' }],
  viewOptions = [{ value: 'view', label: 'View' }],
  currentSort,
  searchQuery,
  statusFilter,
  itemCount,
  totalCount,
  onStatusFilterChange,
  onViewChange,
  onClearSort,
  className = ''
}) => {
  return (
    <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 ${className}`}>
      {/* Smart Filters Section */}
      <div className="flex items-center gap-2 sm:gap-3">
        <img 
          src="/images/img_cube_1.svg" 
          alt="" 
          className="w-4 h-4 sm:w-5 sm:h-5"
        />
        <span className="text-sm sm:text-base font-medium text-global-3">
          Add Smart Filters
        </span>
        <img 
          src="/images/img_angle_small_right.svg" 
          alt="" 
          className="w-3 h-3 sm:w-4 sm:h-4"
        />
      </div>

      {/* Sort and View Controls */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Search Results Indicator */}
        {searchQuery && itemCount !== undefined && totalCount !== undefined && (
          <div className="flex items-center gap-2 px-3 py-2 bg-green-50 border border-green-200 rounded-lg">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-xs text-green-700 font-medium">
              Found {itemCount} of {totalCount} leads
            </span>
          </div>
        )}
        
        {/* Current Sort Display */}
        {currentSort && (
          <div className="flex items-center gap-2 px-3 py-2 bg-blue-50 border border-blue-200 rounded-lg">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
            </svg>
            <span className="text-xs text-blue-700 font-medium">
              Sorted by column header
            </span>
            {onClearSort && (
              <button
                onClick={onClearSort}
                className="text-blue-600 hover:text-blue-800 transition-colors"
                title="Clear sort"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        )}
        
        <div className="inline-block">
          <Dropdown
            placeholder="Filter by Status"
            options={statusFilterOptions}
            value={statusFilter}
            onChange={onStatusFilterChange}
            className="text-xs sm:text-sm"
            leftImage={{
              src: '/images/img_sortalt_1_1.svg',
              width: 16,
              height: 14
            }}
            rightImage={{
              src: '/images/img_angle_small_right.svg',
              width: 12,
              height: 14
            }}
          />
        </div>
        <Dropdown
          placeholder="View"
          options={viewOptions}
          onChange={onViewChange}
          className="text-xs sm:text-sm"
          leftImage={{
            src: '/images/img_tablecolumns_1_1.svg',
            width: 16,
            height: 14
          }}
          rightImage={{
            src: '/images/img_angle_small_right.svg',
            width: 12,
            height: 14
          }}
        />
      </div>
    </div>
  );
};

export default FilterControls;
