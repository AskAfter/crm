'use client';
import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Sidebar from '../../components/common/Sidebar';
import Table from '../../components/ui/Table';
import Dropdown from '../../components/ui/Dropdown';

// Type definitions for component props
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
interface Lead {
  id: number;
  name: string;
  phone: string;
  status: 'Closed' | 'On Hold' | 'Active' | 'Not Started';
  email: string;
  website: string;
  revenue: string;
  contact: string;
  avatar: string;
}
const AllLeadsDashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  // Sample lead data
  const leadsData: Lead[] = [
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
    },
    {
      id: 11,
      name: 'Jamie King',
      phone: '+1 555-345-0123',
      status: 'On Hold',
      email: 'photographylover888@example.com',
      website: 'technewsarena.com',
      revenue: '$250-$500M',
      contact: 'Will D\'Cruz',
      avatar: '/images/img_frame_1991422519.svg'
    },
    {
      id: 12,
      name: 'Drew Martinez',
      phone: '+1 555-321-0987',
      status: 'Closed',
      email: 'bookworm808@example.com',
      website: 'techpulseonline.com',
      revenue: '$500M <',
      contact: 'Will D\'Cruz',
      avatar: '/images/img_frame_1991422519.svg'
    },
    {
      id: 13,
      name: 'Skylar Davis',
      phone: '+1 555-789-0123',
      status: 'Active',
      email: 'fashionista909@example.com',
      website: 'digitalinnovationzone.com',
      revenue: '$10-$50M',
      contact: 'Will D\'Cruz',
      avatar: '/images/img_frame_1991422519.svg'
    },
    {
      id: 14,
      name: 'Avery Wilson',
      phone: '+1 555-210-9876',
      status: 'Active',
      email: 'adventureseeker010@example.com',
      website: 'techfrontier.com',
      revenue: '$500M <',
      contact: 'Will D\'Cruz',
      avatar: '/images/img_frame_1991422519.svg'
    },
    {
      id: 15,
      name: 'Peyton Taylor',
      phone: '+1 555-678-9012',
      status: 'Closed',
      email: 'petlover111@example.com',
      website: 'techconnectworld.com',
      revenue: '$100M-$100B',
      contact: 'Will D\'Cruz',
      avatar: '/images/img_frame_1991422519.svg'
    },
    {
      id: 16,
      name: 'Quinn Anderson',
      phone: '+1 555-098-7654',
      status: 'Not Started',
      email: 'moviebuff222@example.com',
      website: 'techsphere.com',
      revenue: '$500M <',
      contact: 'Will D\'Cruz',
      avatar: '/images/img_frame_1991422519.svg'
    },
    {
      id: 17,
      name: 'Sydney Clark',
      phone: '+1 555-432-1098',
      status: 'Active',
      email: 'historynerd333@example.com',
      website: 'techinsiderhub.com',
      revenue: '$250-$500M',
      contact: 'Will D\'Cruz',
      avatar: '/images/img_frame_1991422519.svg'
    },
    {
      id: 18,
      name: 'Cameron Lewis',
      phone: '+1 555-890-1234',
      status: 'On Hold',
      email: 'sciencefan444@example.com',
      website: 'techworldinsights.com',
      revenue: '$1B-$10B',
      contact: 'Will D\'Cruz',
      avatar: '/images/img_frame_1991422519.svg'
    },
    {
      id: 19,
      name: 'Taylor Hall',
      phone: '+1 555-123-7890',
      status: 'Closed',
      email: 'sportsfan666@example.com',
      website: 'digitaltechdigest.com',
      revenue: '$500M <',
      contact: 'Will D\'Cruz',
      avatar: '/images/img_frame_1991422519.svg'
    },
    {
      id: 20,
      name: 'Alexis Young',
      phone: '+1 555-234-8901',
      status: 'Closed',
      email: 'musicjunkie777@example.com',
      website: 'techviewpoint.com',
      revenue: '$10-$50M',
      contact: 'Will D\'Cruz',
      avatar: '/images/img_frame_1991422519.svg'
    }
  ];
  // Table columns configuration
  const columns: TableColumn[] = [
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
  ];

  const sortOptions: DropdownOption[] = [
    { value: 'sort', label: 'Sort' }
  ];
  
  const viewOptions: DropdownOption[] = [
    { value: 'view', label: 'View' }
  ];
  return (
    <div className="min-h-screen bg-global-2">
      <div className="flex">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        {/* Sidebar */}
        <div className={`
          fixed lg:static
          inset-y-0 left-0
          z-50 lg:z-auto
          transform lg:transform-none
          transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <Sidebar />
        </div>
        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Mobile Menu Button */}
          <div className="lg:hidden p-4 bg-white border-b border-gray-200">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Open sidebar"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Header */}
          <Header />
          {/* Content Area */}
          <main className="flex-1 p-4 sm:p-6 lg:p-8">
            {/* Filters and Controls */}
            <div className="bg-white rounded-[10px] shadow-sm border border-gray-200 overflow-hidden mb-6">
              <div className="p-4 sm:p-6 lg:p-8">
                {/* Smart Filters Row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 mb-6">
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
                  <div className="flex items-center gap-2 sm:gap-4">
                    <Dropdown
                      placeholder="Sort"
                      options={sortOptions}
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
                {/* Clean Table Implementation */}
                <Table 
                  data={leadsData} 
                  columns={columns}
                  className="bg-white rounded-lg overflow-hidden shadow-sm"
                />
              </div>
            </div>
            {/* Pagination */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">20</span> of{' '}
                <span className="font-medium">{leadsData.length}</span> results
              </p>
              <div className="flex items-center gap-2">
                <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                  Previous
                </button>
                <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
export default AllLeadsDashboard;