import { useState, useMemo } from 'react';

export interface Lead {
  id: number;
  name: string;
  phone: string;
  status: string;
  email: string;
  website: string;
  revenue: string;
  contact: string;
  avatar: string;
}

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  className?: string;
  render?: (value: any, row: any, index: number) => React.ReactNode;
}

export interface DropdownOption {
  value: string;
  label: string;
}

export const useLeadsData = () => {
  // Sorting, search, and filtering state
  const [sortBy, setSortBy] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('');
  
  // Sample lead data
  const rawLeadsData: Lead[] = useMemo(() => [
    {
      id: 1,
      name: 'Alex Rivera',
      phone: '+1 555-012-3456',
      status: 'Closed',
      email: 'happytraveler456@example.com',
      website: 'techinsightdaily.com',
      revenue: '$100M-$100B',
      contact: 'Will D\'Cruz',
      avatar: '/images/img_frame_1991422519.svg'
    },
    {
      id: 2,
      name: 'Jordan Lee',
      phone: '+1 555-987-6543',
      status: 'On Hold',
      email: 'creativewriter789@example.com',
      website: 'digitalhorizon.net',
      revenue: '$1B-$10B',
      contact: 'Will D\'Cruz',
      avatar: '/images/img_frame_1991422519.svg'
    },
    {
      id: 3,
      name: 'Samira Patel',
      phone: '+1 555-123-4567',
      status: 'Closed',
      email: 'musiclover101@example.com',
      website: 'innovatechworld.com',
      revenue: '$500M <',
      contact: 'Will D\'Cruz',
      avatar: '/images/img_frame_1991422519.svg'
    },
    {
      id: 4,
      name: 'Chris Thompson',
      phone: '+1 555-765-4321',
      status: 'Active',
      email: 'gamerchick202@example.com',
      website: 'futuretechnews.org',
      revenue: '$100M-$100B',
      contact: 'Will D\'Cruz',
      avatar: '/images/img_frame_1991422519.svg'
    },
    {
      id: 5,
      name: 'Taylor Nguyen',
      phone: '+1 555-234-5678',
      status: 'Not Started',
      email: 'foodieadventures303@example.com',
      website: 'techtrendsblog.com',
      revenue: '$250-$500M',
      contact: 'Will D\'Cruz',
      avatar: '/images/img_frame_1991422519.svg'
    },
    {
      id: 6,
      name: 'Jordan Walker',
      phone: '+1 555-567-8901',
      status: 'Closed',
      email: 'travelbug555@example.com',
      website: 'technewsnetwork.com',
      revenue: '$500M <',
      contact: 'Will D\'Cruz',
      avatar: '/images/img_frame_1991422519.svg'
    },
    {
      id: 7,
      name: 'Jamie Chen',
      phone: '+1 555-876-5432',
      status: 'On Hold',
      email: 'natureenthusiast404@example.com',
      website: 'cybertechreview.com',
      revenue: '$10-$50M',
      contact: 'Will D\'Cruz',
      avatar: '/images/img_frame_1991422519.svg'
    },
    {
      id: 8,
      name: 'Morgan Smith',
      phone: '+1 555-345-6789',
      status: 'Not Started',
      email: 'techgeek505@example.com',
      website: 'nextgenit.com',
      revenue: '$500M <',
      contact: 'Will D\'Cruz',
      avatar: '/images/img_frame_1991422519.svg'
    },
    {
      id: 9,
      name: 'Riley Johnson',
      phone: '+1 555-654-3210',
      status: 'Closed',
      email: 'artisticmind606@example.com',
      website: 'techsavvyhub.com',
      revenue: '$500M <',
      contact: 'Will D\'Cruz',
      avatar: '/images/img_frame_1991422519.svg'
    },
    {
      id: 10,
      name: 'Casey Brown',
      phone: '+1 555-456-7890',
      status: 'Active',
      email: 'fitnessfreak707@example.com',
      website: 'smarttechupdates.com',
      revenue: '$100M-$100B',
      contact: 'Will D\'Cruz',
      avatar: '/images/img_frame_1991422519.svg'
    }
  ], []);

  // Table columns configuration
  const columns: TableColumn[] = useMemo(() => [
    {
      key: 'id',
      label: '#',
      className: 'w-16'
    },
    {
      key: 'name',
      label: 'Name',
      sortable: true,
      className: 'min-w-[200px]'
    },
    {
      key: 'phone',
      label: 'Phone',
      className: 'min-w-[150px]'
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      className: 'min-w-[120px]'
    },
    {
      key: 'email',
      label: 'Email',
      className: 'min-w-[250px]'
    },
    {
      key: 'website',
      label: 'Website',
      className: 'min-w-[200px]'
    },
    {
      key: 'revenue',
      label: 'Annual Revenue',
      sortable: true,
      className: 'min-w-[150px]'
    },
    {
      key: 'contact',
      label: 'Contact',
      sortable: true,
      className: 'min-w-[150px]'
    }
  ], []);

  // Status filter options
  const statusFilterOptions: DropdownOption[] = useMemo(() => [
    { value: '', label: 'All Status' },
    { value: 'Active', label: 'Active' },
    { value: 'On Hold', label: 'On Hold' },
    { value: 'Not Started', label: 'Not Started' },
    { value: 'Closed', label: 'Closed' }
  ], []);

  const viewOptions: DropdownOption[] = useMemo(() => [
    { value: 'all', label: 'All Columns' },
    { value: 'basic', label: 'Basic Info' },
    { value: 'contact', label: 'Contact Details' },
    { value: 'financial', label: 'Financial Info' }
  ], []);

  // Revenue mapping for sorting (higher values = higher revenue)
  const revenueOrder: Record<string, number> = {
    '$100M-$100B': 6,
    '$1B-$10B': 5,
    '$500M <': 4,
    '$250-$500M': 3,
    '$10-$50M': 2,
    '$1-$10M': 1,
    'Unknown': 0
  };

  // Status order for sorting
  const statusOrder: Record<string, number> = {
    'Active': 4,
    'On Hold': 3,
    'Not Started': 2,
    'Closed': 1
  };

  // Search function that looks across multiple fields
  const searchLeads = (leads: Lead[], query: string): Lead[] => {
    if (!query.trim()) return leads;
    
    const searchTerm = query.toLowerCase().trim();
    
    return leads.filter(lead => {
      // Search across name, email, phone, website, status, and contact
      const searchFields = [
        lead.name,
        lead.email,
        lead.phone,
        lead.website,
        lead.status,
        lead.contact,
        lead.revenue
      ];
      
      return searchFields.some(field => 
        field?.toLowerCase().includes(searchTerm)
      );
    });
  };

  // Filter, search, and sort data based on all criteria
  const leadsData = useMemo(() => {
    // First apply search filter
    let filteredData = searchLeads(rawLeadsData, searchQuery);
    
    // Then apply status filter
    if (statusFilter) {
      filteredData = filteredData.filter(lead => lead.status === statusFilter);
    }
    
    // Finally apply sorting if needed
    if (!sortBy) return filteredData;

    const [field, direction] = sortBy.split('-');
    const isAsc = direction === 'asc';

    return [...filteredData].sort((a, b) => {
      let aValue: any = a[field as keyof Lead];
      let bValue: any = b[field as keyof Lead];

      // Special handling for revenue sorting
      if (field === 'revenue') {
        aValue = revenueOrder[aValue] || 0;
        bValue = revenueOrder[bValue] || 0;
      }
      
      // Special handling for status sorting
      if (field === 'status') {
        aValue = statusOrder[aValue] || 0;
        bValue = statusOrder[bValue] || 0;
      }

      // String comparison for names and other text fields
      if (typeof aValue === 'string' && field !== 'revenue' && field !== 'status') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (aValue < bValue) {
        return isAsc ? -1 : 1;
      }
      if (aValue > bValue) {
        return isAsc ? 1 : -1;
      }
      return 0;
    });
  }, [rawLeadsData, searchQuery, statusFilter, sortBy]);

  // Function to handle sort changes
  const handleSortChange = (value: string) => {
    setSortBy(value);
  };

  // Function to clear sorting
  const clearSort = () => {
    setSortBy('');
  };

  // Function to handle search changes
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  // Function to clear search
  const clearSearch = () => {
    setSearchQuery('');
  };

  // Function to handle column header sorting
  const handleColumnSort = (field: string, direction: 'asc' | 'desc') => {
    setSortBy(`${field}-${direction}`);
  };

  // Function to handle status filter changes
  const handleStatusFilterChange = (value: string) => {
    setStatusFilter(value);
  };

  // Function to clear status filter
  const clearStatusFilter = () => {
    setStatusFilter('');
  };

  return {
    leadsData,
    columns,
    statusFilterOptions,
    viewOptions,
    currentSort: sortBy,
    searchQuery,
    statusFilter,
    totalLeads: rawLeadsData.length,
    filteredCount: leadsData.length,
    handleSortChange,
    clearSort,
    handleSearchChange,
    clearSearch,
    handleColumnSort,
    handleStatusFilterChange,
    clearStatusFilter
  };
};
