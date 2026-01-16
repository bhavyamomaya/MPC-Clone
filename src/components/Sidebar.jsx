import React from 'react';
import { NavLink } from 'react-router-dom';
import { Medal, ListTodo, BarChart2, LogOut, LayoutGrid, User } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { path: '/', label: 'Leaderboard', icon: Medal },
    { path: '/activities', label: 'Team Activities', icon: ListTodo },
    { path: '/statistics', label: 'Team Statistics', icon: BarChart2 },
  ];

  return (
    <aside style={{
      width: '280px', // Slightly wider for better spacing
      height: '100vh',
      backgroundColor: 'var(--bg-sidebar)',
      color: 'var(--text-inverted)',
      display: 'flex',
      flexDirection: 'column',
      padding: '2.5rem 1.5rem',
      position: 'fixed',
      left: 0,
      top: 0,
      fontFamily: 'var(--font-family)'
    }}>
      <div style={{ marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem', paddingLeft: '0.5rem' }}>
        <div style={{ 
          width: '48px', 
          height: '48px', 
          borderRadius: '50%', 
          backgroundColor: '#94a3b8', 
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid rgba(255,255,255,0.2)'
        }}>
           <User size={32} color="#cbd5e1" /> 
           {/* Placeholder for actual avatar if available */}
           <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Nikita" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div>
          <h2 style={{ fontSize: '1rem', fontWeight: '700', color: 'white', lineHeight: '1.2' }}>Nikita Suhane</h2>
          <p style={{ fontSize: '0.75rem', opacity: 0.7, fontWeight: '400' }}>Presenter</p>
        </div>
      </div>

      <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            style={({ isActive }) => ({
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem 1.25rem',
              borderRadius: '0.75rem',
              transition: 'all 0.2s',
              backgroundColor: isActive ? 'var(--accent-primary)' : 'transparent',
              color: 'white',
              textDecoration: 'none',
              fontWeight: isActive ? 600 : 500,
              boxShadow: isActive ? '0 4px 12px rgba(37, 99, 235, 0.4)' : 'none'
            })}
          >
            {({ isActive }) => (
              <>
                <item.icon size={20} style={{ opacity: isActive ? 1 : 0.7 }} />
                <span>{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          padding: '1rem 1.25rem',
          width: '100%',
          background: 'none',
          border: 'none',
          color: '#ef4444', 
          cursor: 'pointer',
          borderRadius: '0.75rem',
          fontSize: '0.95rem',
          fontWeight: '500',
          transition: 'background 0.2s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.1)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
