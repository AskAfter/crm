'use client';
import React, { useState, useMemo } from 'react';
import Header from '../../components/common/Header';
import Sidebar from '../../components/common/Sidebar';
import Button from '../../components/ui/Button';
import Dropdown from '../../components/ui/Dropdown';
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
  const [sortConfig, setSortConfig] = useState<{ key: string | null; direction: 'asc' | 'desc' }>({ 
    key: null, 
    direction: 'asc' 
  });
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
  const sortOptions = [
    { value: 'sort', label: 'Sort' }
  ];
  const viewOptions = [
    { value: 'view', label: 'View' }
  ];
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
      '$500M <': 'bg-global-1 text-global-1',
      '$250-$500M': 'bg-table-3 text-global-1',
      '$10-$50M': 'bg-table-4 text-global-1'
    };
    return revenueClasses[revenue] || 'bg-gray-100 text-gray-800';
  };
  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };
  const sortedData = React.useMemo(() => {
    if (!sortConfig.key) return leadsData;
    return [...leadsData].sort((a, b) => {
      const aValue = a[sortConfig.key as keyof Lead];
      const bValue = b[sortConfig.key as keyof Lead];
      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [leadsData, sortConfig]);
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
                {/* Table Header */}
                <div className="overflow-x-auto">
                  <div className="min-w-[1200px]">
                    {/* Header Row */}
                    <div className="flex items-center border-t border-b border-gray-200 bg-white">
                      {/* Checkbox Column */}
                      <div className="w-16 px-3 py-3 sm:px-4 sm:py-4 border-r border-gray-200 flex items-center justify-center">
                        <img 
                          src="/images/img_.png" 
                          alt="" 
                          className="w-3 h-3 sm:w-4 sm:h-4"
                        />
                      </div>
                      {/* Name Column */}
                      <div className="flex-1 min-w-[200px] px-3 py-3 sm:px-4 sm:py-4 border-r border-gray-200">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border border-gray-300 rounded"></div>
                            <span className="text-xs sm:text-sm font-medium text-global-5">Name</span>
                          </div>
                          <img 
                            src="/images/img_tabler_dots.svg" 
                            alt="" 
                            className="w-4 h-4"
                          />
                        </div>
                      </div>
                      {/* Phone Column */}
                      <div className="w-40 px-3 py-3 sm:px-4 sm:py-4 border-r border-gray-200">
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm font-medium text-global-5">Phone number</span>
                          <img 
                            src="/images/img_tabler_dots.svg" 
                            alt="" 
                            className="w-4 h-4"
                          />
                        </div>
                      </div>
                      {/* Status Column */}
                      <div className="w-32 px-3 py-3 sm:px-4 sm:py-4 border-r border-gray-200">
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm font-medium text-global-5">Status</span>
                          <img 
                            src="/images/img_tabler_dots.svg" 
                            alt="" 
                            className="w-4 h-4"
                          />
                        </div>
                      </div>
                      {/* Email Column */}
                      <div className="flex-1 min-w-[250px] px-3 py-3 sm:px-4 sm:py-4 border-r border-gray-200">
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm font-medium text-global-5">Email address</span>
                          <img 
                            src="/images/img_tabler_dots.svg" 
                            alt="" 
                            className="w-4 h-4"
                          />
                        </div>
                      </div>
                      {/* URL Column */}
                      <div className="flex-1 min-w-[200px] px-3 py-3 sm:px-4 sm:py-4 border-r border-gray-200">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <span className="text-xs sm:text-sm font-medium text-global-5">URL</span>
                            <img 
                              src="/images/img_material_symbols_info_outline.svg" 
                              alt="" 
                              className="w-2.5 h-2.5"
                            />
                          </div>
                          <img 
                            src="/images/img_tabler_dots.svg" 
                            alt="" 
                            className="w-4 h-4"
                          />
                        </div>
                      </div>
                      {/* Revenue Column */}
                      <div className="w-40 px-3 py-3 sm:px-4 sm:py-4 border-r border-gray-200">
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm font-medium text-global-5">Annual Revenue</span>
                          <img 
                            src="/images/img_tabler_dots.svg" 
                            alt="" 
                            className="w-4 h-4"
                          />
                        </div>
                      </div>
                      {/* Contacts Column */}
                      <div className="w-32 px-3 py-3 sm:px-4 sm:py-4 border-r border-gray-200">
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm font-medium text-global-5">Contacts</span>
                          <img 
                            src="/images/img_tabler_dots.svg" 
                            alt="" 
                            className="w-4 h-4"
                          />
                        </div>
                      </div>
                      {/* Lead Owner Column */}
                      <div className="w-40 px-3 py-3 sm:px-4 sm:py-4">
                        <span className="text-xs sm:text-sm font-medium text-global-5">Lead Owner</span>
                      </div>
                    </div>
                    {/* Table Body */}
                    <div className="bg-white">
                      {sortedData.map((lead, index) => (
                        <div key={lead.id} className="flex items-center border-b border-gray-200 hover:bg-gray-50 transition-colors">
                          {/* Checkbox Column */}
                          <div className="w-16 px-3 py-3 sm:px-4 sm:py-4 border-r border-gray-200 flex items-center justify-center">
                            <span className="text-xs text-global-6">{index + 1}</span>
                          </div>
                          {/* Name Column */}
                          <div className="flex-1 min-w-[200px] px-3 py-3 sm:px-4 sm:py-4 border-r border-gray-200">
                            <div className="flex items-center gap-2">
                              <img 
                                src={lead.avatar} 
                                alt="" 
                                className="w-4 h-4 sm:w-5 sm:h-5"
                              />
                              <span className="text-xs sm:text-sm text-global-1">{lead.name}</span>
                            </div>
                          </div>
                          {/* Phone Column */}
                          <div className="w-40 px-3 py-3 sm:px-4 sm:py-4 border-r border-gray-200">
                            <a 
                              href={`tel:${lead.phone}`}
                              className="text-xs sm:text-sm text-global-5 underline hover:text-blue-600 transition-colors"
                            >
                              {lead.phone}
                            </a>
                          </div>
                          {/* Status Column */}
                          <div className="w-32 px-3 py-3 sm:px-4 sm:py-4 border-r border-gray-200">
                            <span className={`
                              inline-flex
                              px-2 py-1
                              text-xs
                              font-medium
                              rounded-[4px]
                              ${getStatusBadgeClass(lead.status)}
                            `}>
                              {lead.status}
                            </span>
                          </div>
                          {/* Email Column */}
                          <div className="flex-1 min-w-[250px] px-3 py-3 sm:px-4 sm:py-4 border-r border-gray-200">
                            <a 
                              href={`mailto:${lead.email}`}
                              className="text-xs sm:text-sm text-global-5 underline hover:text-blue-600 transition-colors"
                            >
                              {lead.email}
                            </a>
                          </div>
                          {/* URL Column */}
                          <div className="flex-1 min-w-[200px] px-3 py-3 sm:px-4 sm:py-4 border-r border-gray-200">
                            <a 
                              href={`https://${lead.website}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs sm:text-sm text-global-5 underline hover:text-blue-600 transition-colors"
                            >
                              {lead.website}
                            </a>
                          </div>
                          {/* Revenue Column */}
                          <div className="w-40 px-3 py-3 sm:px-4 sm:py-4 border-r border-gray-200">
                            <span className={`
                              inline-flex
                              px-2 py-1
                              text-xs
                              font-medium
                              rounded-[4px]
                              ${getRevenueBadgeClass(lead.revenue)}
                            `}>
                              {lead.revenue}
                            </span>
                          </div>
                          {/* Contacts Column */}
                          <div className="w-32 px-3 py-3 sm:px-4 sm:py-4 border-r border-gray-200">
                            <span className="text-xs sm:text-sm text-global-1">{lead.contact}</span>
                          </div>
                          {/* Lead Owner Column */}
                          <div className="w-40 px-3 py-3 sm:px-4 sm:py-4">
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 bg-global-4 rounded-[10px] flex items-center justify-center relative">
                                <span className="text-xs font-bold text-global-2 absolute top-0">;</span>
                                <img 
                                  src="/images/img_u.svg" 
                                  alt="" 
                                  className="w-1.5 h-1.5 absolute bottom-1"
                                />
                              </div>
                              <span className="text-xs text-global-1">{lead.contact}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
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