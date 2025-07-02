'use client';
import React, { useState } from 'react';
import Dropdown from '../ui/Dropdown';

const Sidebar = ({ className = '', ...props }) => {
  const [activeMenuItem, setActiveMenuItem] = useState('All Leads');
  const [activeFilter, setActiveFilter] = useState('Today leads');

  const menuItems = [
    {
      id: 'all-leads',
      label: 'All Leads',
      icon: '/images/img_users_alt_streamline_unicons.svg'
    },
    {
      id: 'workflows',
      label: 'Workflows',
      icon: '/images/img_workflow.svg'
    }
  ];

  const smartFilters = [
    {
      id: 'today-leads',
      label: 'Today leads',
      icon: '/images/img_workflows.png',
      count: null
    },
    {
      id: 'not-called',
      label: 'Not called yet',
      icon: '/images/img_workflows_22x18.png',
      count: 9
    },
    {
      id: 'contract-sent',
      label: 'Contract sent',
      icon: '/images/img_workflows_1.png',
      count: null
    },
    {
      id: 'cold-prospects',
      label: 'Cold prospects',
      icon: '/images/img_workflows_2.png',
      count: 2
    },
    {
      id: 'follow-up',
      label: 'Follow up later',
      icon: '/images/img_workflows_3.png',
      count: null
    }
  ];

  const bottomMenuItems = [
    {
      id: 'settings',
      label: 'Settings',
      icon: '/images/img_uil_setting.svg'
    },
    {
      id: 'help',
      label: 'Help & Support',
      icon: '/images/img_messages_question.svg'
    },
    {
      id: 'invite',
      label: 'Invite members',
      icon: '/images/img_smile_plus_1.svg'
    }
  ];

  const companyOptions = [
    { value: 'company1', label: 'Company Name' },
    { value: 'company2', label: 'Tech Corp' },
    { value: 'company3', label: 'Innovation Ltd' }
  ];

  const handleMenuClick = (itemId) => {
    setActiveMenuItem(itemId);
  };

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
  };

  return (
    <aside 
      className={`
        w-full lg:w-64 xl:w-72
        h-screen
        bg-global-5
        border-r border-gray-200
        flex flex-col
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      {...props}
    >
      {/* Company Dropdown */}
      <div className="p-4 sm:p-5 lg:p-6 border-b border-gray-200">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-6 h-6 sm:w-7 sm:h-7 bg-sidebar-1 rounded-[5px] flex items-center justify-center">
            <img 
              src="/images/img_vector.svg" 
              alt="" 
              className="w-3 h-3 sm:w-4 sm:h-4"
            />
          </div>
          <div className="flex-1">
            <Dropdown
              placeholder="Company Name"
              options={companyOptions}
              className="text-xs sm:text-sm text-sidebar-1"
              rightImage={{
                src: '/images/img_anglesmallright_1.svg',
                width: 12,
                height: 12
              }}
            />
          </div>
        </div>
      </div>

      {/* Main Menu */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 sm:p-5 lg:p-6">
          {/* Navigation Items */}
          <div className="space-y-1 sm:space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.label)}
                className={`
                  w-full
                  flex items-center
                  gap-2 sm:gap-3
                  px-3 py-2 sm:px-4 sm:py-3
                  text-sm sm:text-base
                  font-medium
                  rounded-lg
                  transition-all duration-200
                  ${activeMenuItem === item.label 
                    ? 'bg-blue-50 text-blue-700' :'text-global-5 hover:bg-gray-50'
                  }
                `.trim().replace(/\s+/g, ' ')}
                role="menuitem"
              >
                <img 
                  src={item.icon} 
                  alt="" 
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                {item.label}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="my-4 sm:my-5 lg:my-6 h-px bg-sidebar-2"></div>

          {/* Smart Filters */}
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center justify-between px-3 sm:px-4">
              <h3 className="text-xs sm:text-sm font-semibold text-global-5 uppercase tracking-wider">
                Smart Filters
              </h3>
              <button className="p-1 hover:bg-gray-100 rounded">
                <img 
                  src="/images/img_iconoir_plus.svg" 
                  alt="Add filter" 
                  className="w-4 h-4"
                />
              </button>
            </div>

            <div className="space-y-1">
              {smartFilters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => handleFilterClick(filter.label)}
                  className={`
                    w-full
                    flex items-center
                    justify-between
                    gap-2 sm:gap-3
                    px-3 py-2 sm:px-4 sm:py-3
                    text-sm sm:text-base
                    font-medium
                    rounded-lg
                    transition-all duration-200
                    ${activeFilter === filter.label 
                      ? 'bg-blue-50 text-blue-700' :'text-sidebar-1 hover:bg-gray-50'
                    }
                  `.trim().replace(/\s+/g, ' ')}
                  role="menuitem"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <img 
                      src={filter.icon} 
                      alt="" 
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    />
                    {filter.label}
                  </div>
                  {filter.count && (
                    <span className="bg-sidebar-1 text-sidebar-2 text-xs px-2 py-1 rounded-[8px] min-w-[20px] text-center">
                      {filter.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Menu */}
      <div className="border-t border-gray-200 p-4 sm:p-5 lg:p-6">
        <div className="space-y-1 sm:space-y-2">
          {bottomMenuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item.label)}
              className={`
                w-full
                flex items-center
                gap-2 sm:gap-3
                px-3 py-2 sm:px-4 sm:py-3
                text-sm sm:text-base
                font-medium
                rounded-lg
                transition-all duration-200
                ${activeMenuItem === item.label 
                  ? 'bg-blue-50 text-blue-700' :'text-sidebar-1 hover:bg-gray-50'
                }
              `.trim().replace(/\s+/g, ' ')}
              role="menuitem"
            >
              <img 
                src={item.icon} 
                alt="" 
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;