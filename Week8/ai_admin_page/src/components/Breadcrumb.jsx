import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment);

  // If we're on the root path, don't show breadcrumbs
  if (pathSegments.length === 0) {
    return null;
  }

  return (
    <div className="flex items-center text-sm text-gray-500 mb-4">
      <Link to="/" className="text-pink-500 hover:text-pink-600">
        Dashboard
      </Link>
      
      {pathSegments.map((segment, index) => {
        // Build up the path so far
        const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
        const isLast = index === pathSegments.length - 1;
        
        // Format the segment name (capitalize first letter)
        const formattedName = segment.charAt(0).toUpperCase() + segment.slice(1);
        
        return (
          <React.Fragment key={path}>
            <ChevronRight size={14} className="mx-2 text-gray-400" />
            {isLast ? (
              <span className="text-gray-700 font-medium">{formattedName}</span>
            ) : (
              <Link to={path} className="text-pink-500 hover:text-pink-600">
                {formattedName}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumb;