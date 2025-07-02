import { useMemo } from 'react';

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
  // Sample lead data
  const leadsData: Lead[] = useMemo(() => [
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
      className: 'min-w-[150px]'
    }
  ], []);

  // Dropdown options
  const sortOptions: DropdownOption[] = useMemo(() => [
    { value: 'name-asc', label: 'Name (A-Z)' },
    { value: 'name-desc', label: 'Name (Z-A)' },
    { value: 'status-asc', label: 'Status (A-Z)' },
    { value: 'revenue-desc', label: 'Revenue (High-Low)' }
  ], []);

  const viewOptions: DropdownOption[] = useMemo(() => [
    { value: 'all', label: 'All Columns' },
    { value: 'basic', label: 'Basic Info' },
    { value: 'contact', label: 'Contact Details' },
    { value: 'financial', label: 'Financial Info' }
  ], []);

  return {
    leadsData,
    columns,
    sortOptions,
    viewOptions
  };
};
