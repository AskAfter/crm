'use client';
import React from 'react';
import Dropdown from '../ui/Dropdown';

interface DropdownOption {
  value: string;
  label: string;
}

interface FilterControlsProps {
  sortOptions?: DropdownOption[];
  viewOptions?: DropdownOption[];
  onSortChange?: (value: string) => void;
  onViewChange?: (value: string) => void;
  className?: string;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  sortOptions = [{ value: 'sort', label: 'Sort' }],
  viewOptions = [{ value: 'view', label: 'View' }],
  onSortChange,
  onViewChange,
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
        <Dropdown
          placeholder="Sort"
          options={sortOptions}
          onChange={onSortChange}
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
