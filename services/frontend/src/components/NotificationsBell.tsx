import React, { useEffect, useState } from 'react';

import ClickAwayButton from './ClickAwayButton';
import NotificationsIcon from './NotificationsIcon';

const NotificationsBell = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const handleEscape = (e: any) => {
    if (e.key === 'Esc' || e.key === 'Escape') {
      setShowNotifications(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <div className="relative flex-shrink-0">
      <button
        onClick={() => setShowNotifications(!showNotifications)}
        className="flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <label className="sr-only">View notifications</label>
        <NotificationsIcon />
      </button>
      {showNotifications && (
        <>
          <ClickAwayButton onClickAway={() => setShowNotifications(false)} />
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu"
            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-50"
          >
            <h1 className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
              You currently have no notifications!
            </h1>
          </div>
        </>
      )}
    </div>
  );
};

export default NotificationsBell;
