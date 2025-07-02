'use client';
import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Sidebar from '../../components/common/Sidebar';
import Table from '../../components/ui/Table';
const AllLeadsDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // Sample lead data
  const leadsData = [
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
  ];
  const columns = [
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
  return (
    <div className="min-h-screen bg-gray-50">
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
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <Table 
                data={leadsData}
                columns={columns}
                className="w-full"
              />
            </div>
            {/* Pagination or additional content can go here */}
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
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