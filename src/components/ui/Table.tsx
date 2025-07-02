'use client';
import React, { useState, useMemo } from 'react';

interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  className?: string;
  render?: (value: any, row: any, index: number) => React.ReactNode;
}

interface TableProps {
  data: any[];
  columns: TableColumn[];
  currentSort?: string;
  onSort?: (field: string, direction: 'asc' | 'desc') => void;
  className?: string;
  [key: string]: any;
}

const Table: React.FC<TableProps> = ({ 
  data = [], 
  columns = [], 
  currentSort,
  onSort,
  className = '', 
  ...props 
}) => {
  // Parse current sort to get field and direction
  const getCurrentSortInfo = () => {
    if (!currentSort) return { field: null, direction: 'asc' as const };
    const [field, direction] = currentSort.split('-');
    return { field, direction: direction as 'asc' | 'desc' };
  };

  const { field: currentField, direction: currentDirection } = getCurrentSortInfo();

  const handleSort = (key: string) => {
    if (!onSort) return;
    
    // Determine new direction
    let newDirection: 'asc' | 'desc' = 'asc';
    if (currentField === key && currentDirection === 'asc') {
      newDirection = 'desc';
    }
    
    // Call external sort handler
    onSort(key, newDirection);
  };

  // Use the data as-is since sorting is handled externally
  const displayData = data;

  const getStatusBadgeClass = (status: string): string => {
    const statusClasses: Record<string, string> = {
      'Closed': 'bg-table-2 text-global-4',
      'On Hold': 'bg-table-4 text-global-4',
      'Active': 'bg-global-3 text-global-4',
      'Not Started': 'bg-table-1 text-global-4'
    };
    return statusClasses[status] || 'bg-gray-100 text-gray-800';
  };

  const getRevenueBadgeClass = (revenue: string): string => {
    const revenueClasses: Record<string, string> = {
      '$100M-$100B': 'bg-global-3 text-global-1',
      '$1B-$10B': 'bg-table-2 text-global-1',
      '$500M <': 'bg-table-1 text-global-1',
      '$250-$500M': 'bg-table-3 text-global-1',
      '$10-$50M': 'bg-table-4 text-global-1'
    };
    return revenueClasses[revenue] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className={`w-full border-collapse ${className}`} {...props}>
        <thead>
          <tr className="border-b border-gray-200">
            {columns.map((column, index) => (
              <th
                key={index}
                className={`
                  px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-4
                  text-left
                  text-xs sm:text-sm md:text-base
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider
                  bg-gray-50
                  ${column.sortable ? 'cursor-pointer hover:bg-gray-100' : ''}
                `.trim().replace(/\s+/g, ' ')}
                onClick={() => column.sortable && handleSort(column.key)}
              >
                <div className="flex items-center gap-1">
                  {column.label}
                  {column.sortable && currentField === column.key && (
                    <span className="text-blue-500">
                      {currentDirection === 'asc' ? '↑' : '↓'}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {displayData.map((row, rowIndex) => (
            <tr 
              key={rowIndex}
              className="hover:bg-gray-50 transition-colors duration-150"
            >
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className={`
                    px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-4
                    text-xs sm:text-sm md:text-base
                    text-gray-900
                    whitespace-nowrap
                    ${column.className || ''}
                  `.trim().replace(/\s+/g, ' ')}
                >
                  {column.render ? column.render(row[column.key], row, rowIndex) : (
                    <div className="flex items-center">
                      {column.key === 'name' && row.avatar && (
                        <img 
                          src={row.avatar} 
                          alt="" 
                          className="w-4 h-4 sm:w-5 sm:h-5 mr-2 rounded-full"
                        />
                      )}
                      {column.key === 'status' ? (
                        <span className={`
                          inline-flex
                          px-2 py-1
                          text-xs
                          font-medium
                          rounded-[4px]
                          ${getStatusBadgeClass(row[column.key])}
                        `}>
                          {row[column.key]}
                        </span>
                      ) : column.key === 'revenue' ? (
                        <span className={`
                          inline-flex
                          px-2 py-1
                          text-xs
                          font-medium
                          rounded-[4px]
                          ${getRevenueBadgeClass(row[column.key])}
                        `}>
                          {row[column.key]}
                        </span>
                      ) : column.key === 'phone' || column.key === 'email' || column.key === 'website' ? (
                        <a 
                          href={column.key === 'phone' ? `tel:${row[column.key]}` : 
                                column.key === 'email' ? `mailto:${row[column.key]}` : 
                                `https://${row[column.key]}`}
                          className="text-global-5 underline hover:text-blue-600 transition-colors"
                        >
                          {row[column.key]}
                        </a>
                      ) : (
                        row[column.key]
                      )}
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;