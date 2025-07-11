'use client';
import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Sidebar from '../../components/common/Sidebar';
import SidebarLayout from '../../components/layout/SidebarLayout';
import MobileMenuButton from '../../components/ui/MobileMenuButton';
import DataTableContainer from '../../components/features/DataTableContainer';
import Pagination from '../../components/ui/Pagination';
import { useLeadsData } from '../../hooks/useLeadsData';

const AllLeadsDashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  
  // Use the custom hook for data and configuration
  const { 
    leadsData, 
    columns, 
    statusFilterOptions, 
    viewOptions, 
    currentSort,
    searchQuery,
    statusFilter,
    currentView,
    totalLeads,
    filteredCount,
    handleSortChange, 
    clearSort,
    handleSearchChange,
    clearSearch,
    handleColumnSort,
    handleStatusFilterChange,
    clearStatusFilter,
    handleViewChange,
    handleStatusUpdate
  } = useLeadsData();
  
  const handlePageChange = (page: number) => {
    console.log('Page changed to:', page);
    // TODO: Implement pagination logic
  };
  return (
    <div className="min-h-screen bg-global-2">
      <SidebarLayout
        sidebar={<Sidebar />}
        sidebarOpen={sidebarOpen}
        onCloseSidebar={() => setSidebarOpen(false)}
      >
        {/* Mobile Menu Button */}
        <MobileMenuButton 
          onClick={() => setSidebarOpen(!sidebarOpen)}
        />
        
        {/* Header */}
        <Header 
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          onClearSearch={clearSearch}
          searchResultsCount={filteredCount}
          totalCount={totalLeads}
        />
        
        {/* Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {/* Data Table with Filters */}
          <DataTableContainer
            data={leadsData}
            columns={columns}
            statusFilterOptions={statusFilterOptions}
            viewOptions={viewOptions}
            currentSort={currentSort}
            searchQuery={searchQuery}
            statusFilter={statusFilter}
            currentView={currentView}
            totalCount={totalLeads}
            onStatusFilterChange={handleStatusFilterChange}
            onViewChange={handleViewChange}
            onClearSort={clearSort}
            onColumnSort={handleColumnSort}
            onStatusChange={handleStatusUpdate}
            className="mb-6"
          />
          
          {/* Pagination */}
          <Pagination
            totalItems={leadsData.length}
            onPageChange={handlePageChange}
          />
        </main>
      </SidebarLayout>
    </div>
  );
};
export default AllLeadsDashboard;