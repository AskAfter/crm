'use client';
import React from 'react';

interface MobileMenuButtonProps {
  onClick: () => void;
  className?: string;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ 
  onClick, 
  className = '' 
}) => {
  return (
    <div className={`lg:hidden p-4 bg-white border-b border-gray-200 ${className}`}>
      <button
        onClick={onClick}
        className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Open sidebar"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  );
};

export default MobileMenuButton;
