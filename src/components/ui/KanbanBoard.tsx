'use client';
import React, { useState } from 'react';
import { Lead } from '../../hooks/useLeadsData';

interface KanbanBoardProps {
  data: Lead[];
  onStatusChange?: (leadId: number, newStatus: string) => void;
  className?: string;
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ data, onStatusChange, className = '' }) => {
  const [draggedItem, setDraggedItem] = useState<Lead | null>(null);
  const [dragOverColumn, setDragOverColumn] = useState<string | null>(null);
  // Define status columns in order
  const statusColumns = [
    { status: 'Active', label: 'Active', color: 'bg-green-100 border-green-300' },
    { status: 'On Hold', label: 'On Hold', color: 'bg-yellow-100 border-yellow-300' },
    { status: 'Not Started', label: 'Not Started', color: 'bg-gray-100 border-gray-300' },
    { status: 'Closed', label: 'Closed', color: 'bg-blue-100 border-blue-300' }
  ];

  // Group leads by status
  const groupedLeads = statusColumns.map(column => ({
    ...column,
    leads: data.filter(lead => lead.status === column.status)
  }));

  // Get status badge class for cards
  const getStatusBadgeClass = (status: string): string => {
    const statusClasses: Record<string, string> = {
      'Closed': 'bg-table-2 text-global-4',
      'On Hold': 'bg-table-4 text-global-4',
      'Active': 'bg-global-3 text-global-4',
      'Not Started': 'bg-table-1 text-global-4'
    };
    return statusClasses[status] || 'bg-gray-100 text-gray-800';
  };

  // Get revenue badge class for cards
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
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {groupedLeads.map((column) => (
          <div key={column.status} className="flex flex-col">
            {/* Column Header */}
            <div className={`p-4 rounded-t-lg border-2 ${column.color}`}>
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-800">{column.label}</h3>
                <span className="text-sm text-gray-600 bg-white px-2 py-1 rounded-full">
                  {column.leads.length}
                </span>
              </div>
            </div>

            {/* Column Content */}
            <div 
              className={`flex-1 p-4 bg-gray-50 rounded-b-lg border-2 border-t-0 ${column.color} min-h-[400px] transition-colors duration-200 ${
                dragOverColumn === column.status ? 'bg-blue-100' : ''
              }`}
              onDragOver={(e) => { 
                e.preventDefault(); 
                setDragOverColumn(column.status); 
              }}
              onDrop={(e) => {
                e.preventDefault();
                if (draggedItem && dragOverColumn && draggedItem.status !== dragOverColumn && onStatusChange) {
                  onStatusChange(draggedItem.id, dragOverColumn);
                }
                setDragOverColumn(null);
              }}
              onDragLeave={(e) => {
                // Only clear drag over if we're leaving the column entirely
                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                  setDragOverColumn(null);
                }
              }}
            >
              <div className="space-y-3">
                {column.leads.map((lead) => (
                  <div
                    key={lead.id}
                    className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-grab active:cursor-grabbing"
                    draggable
                    onDragStart={() => setDraggedItem(lead)}
                    onDragEnd={() => setDraggedItem(null)}
                  >
                    {/* Lead Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <img 
                          src={lead.avatar} 
                          alt="" 
                          className="w-6 h-6 rounded-full"
                        />
                        <h4 className="font-medium text-gray-900 text-sm">{lead.name}</h4>
                      </div>
                      <span className={`
                        inline-flex px-2 py-1 text-xs font-medium rounded
                        ${getStatusBadgeClass(lead.status)}
                      `}>
                        {lead.status}
                      </span>
                    </div>

                    {/* Lead Details */}
                    <div className="space-y-2 text-xs text-gray-600">
                      <div className="flex items-center gap-2">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>{lead.phone}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                        <span className="truncate">{lead.email}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                        </svg>
                        <span className="truncate">{lead.website}</span>
                      </div>
                    </div>

                    {/* Revenue Badge */}
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <span className={`
                        inline-flex px-2 py-1 text-xs font-medium rounded
                        ${getRevenueBadgeClass(lead.revenue)}
                      `}>
                        {lead.revenue}
                      </span>
                    </div>

                    {/* Contact */}
                    <div className="mt-2 text-xs text-gray-500">
                      Contact: {lead.contact}
                    </div>
                  </div>
                ))}

                {/* Empty State */}
                {column.leads.length === 0 && (
                  <div className="text-center py-8 text-gray-400">
                    <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                    <p>No leads</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
