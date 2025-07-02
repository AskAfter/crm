'use client';
import React from 'react';
import Table from '../ui/Table';
import FilterControls from './FilterControls';

interface DropdownOption {
  value: string;
  label: string;
}

interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  className?: string;
  render?: (value: any, row: any, index: number) => React.ReactNode;
}

interface DataTableContainerProps {
  data: any[];
  columns: TableColumn[];
  statusFilterOptions?: DropdownOption[];
  viewOptions?: DropdownOption[];
  currentSort?: string;
  searchQuery?: string;
  statusFilter?: string;
  totalCount?: number;
  onStatusFilterChange?: (value: string) => void;
  onViewChange?: (value: string) => void;
  onClearSort?: () => void;
  onColumnSort?: (field: string, direction: 'asc' | 'desc') => void;
  title?: string;
  className?: string;
}

const DataTableContainer: React.FC<DataTableContainerProps> = ({
  data,
  columns,
  statusFilterOptions,
  viewOptions,
  currentSort,
  searchQuery,
  statusFilter,
  totalCount,
  onStatusFilterChange,
  onViewChange,
  onClearSort,
  onColumnSort,
  title,
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-[10px] shadow-sm border border-gray-200 overflow-hidden ${className}`}>
      <div className="p-4 sm:p-6 lg:p-8">
        {title && (
          <h2 className="text-lg font-semibold text-gray-900 mb-6">{title}</h2>
        )}
        
        {/* Filters and Controls */}
        <FilterControls
          statusFilterOptions={statusFilterOptions}
          viewOptions={viewOptions}
          currentSort={currentSort}
          searchQuery={searchQuery}
          statusFilter={statusFilter}
          itemCount={data.length}
          totalCount={totalCount}
          onStatusFilterChange={onStatusFilterChange}
          onViewChange={onViewChange}
          onClearSort={onClearSort}
          className="mb-6"
        />

        {/* Data Table */}
        <Table 
          data={data} 
          columns={columns}
          currentSort={currentSort}
          onSort={onColumnSort}
          className="bg-white rounded-lg overflow-hidden shadow-sm"
        />
      </div>
    </div>
  );
};

export default DataTableContainer;
