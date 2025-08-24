
"use client";

import React from "react";

// NOTE: This is the refactored DetailsSection component.
// It is now a simple, "dumb" layout component.
// It has no knowledge of pages, forms, or actions.
// It simply renders whatever children are passed to it inside a styled wrapper.

interface DetailsSectionExampleProps {
  title: string;
  children: React.ReactNode;
}

const DetailsSectionExample: React.FC<DetailsSectionExampleProps> = ({ title, children }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
};

export default DetailsSectionExample;
