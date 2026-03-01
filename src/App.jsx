import { useState } from 'react';
import LoginScreen from './components/LoginScreen';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import PageContent from './components/PageContent';
import { ROLES } from './data/roles';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState('admin');
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleLogin = (selectedRole) => {
    setRole(selectedRole);
    setCurrentPage(ROLES[selectedRole].defaultPage);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    if (window.confirm('Sign out?')) {
      setLoggedIn(false);
    }
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  if (!loggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <>
      <div className="app">
        <Sidebar
          role={role}
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onLogout={handleLogout}
          collapsed={sidebarCollapsed}
        />
        <div className="main-wrapper">
          <Header
            role={role}
            currentPage={currentPage}
            onToggleSidebar={() => setSidebarCollapsed(prev => !prev)}
            onLogout={handleLogout}
          />
          <PageContent
            role={role}
            currentPage={currentPage}
            onNavigate={handleNavigate}
          />
        </div>
      </div>
      <MobileNav
        role={role}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
    </>
  );
}
