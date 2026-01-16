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
    <aside className="w-[280px] h-screen bg-bg-sidebar text-white flex flex-col px-6 py-10 fixed left-0 top-0 font-sans">
      <div className="mb-12 flex items-center gap-4 pl-2">
        <div className="w-12 h-12 rounded-full bg-[#94a3b8] overflow-hidden flex items-center justify-center border-2 border-white/20">
           {/* Placeholder for actual avatar if available */}
           <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Nikita" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="text-base font-bold text-white leading-tight">Nikita Suhane</h2>
          <p className="text-xs opacity-70 font-normal">Presenter</p>
        </div>
      </div>

      <nav className="flex-1 flex flex-col gap-3">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-200
              ${isActive ? 'bg-accent-primary font-semibold shadow-[0_4px_12px_rgba(37,99,235,0.4)]' : 'bg-transparent font-medium'}
              text-white no-underline
            `}
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

      <div className="mt-auto border-t border-white/10 pt-6">
        <button 
          className="flex items-center gap-4 px-5 py-4 w-full bg-none border-none text-red-500 cursor-pointer rounded-xl text-[0.95rem] font-medium transition-colors hover:bg-red-500/10"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
