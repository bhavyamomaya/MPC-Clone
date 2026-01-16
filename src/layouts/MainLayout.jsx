import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const MainLayout = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <main style={{ 
        marginLeft: '280px', 
        flex: 1, 
        padding: '2rem', // Keep padding as outer margin
        backgroundColor: 'var(--bg-sidebar)', // Blue background leaks through
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '44px',
          padding: '2rem',
          minHeight: 'calc(100vh - 4rem)',
          marginLeft: '-1rem',
          width: '100%',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
        }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
