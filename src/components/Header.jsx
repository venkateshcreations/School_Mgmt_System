import { ROLES, USER_NAMES, PAGE_INFO } from '../data/roles';

export default function Header({ role, currentPage, onToggleSidebar, onLogout }) {
  const roleData = ROLES[role];
  const pageInfo = PAGE_INFO[currentPage] || { title: currentPage, sub: 'EduCore SMS' };

  const roleColors = {
    admin: 'badge-primary',
    principal: 'badge-purple',
    teacher: 'badge-success',
    student: 'badge-warning',
    parent: 'badge-cyan',
    accountant: 'badge-orange',
  };

  return (
    <header className="header">
      <button className="header-toggle" onClick={onToggleSidebar}>☰</button>
      <div className="header-search">
        <span style={{ color: 'var(--text-muted)' }}>🔍</span>
        <input placeholder="Search..." />
      </div>
      <div className="header-page-info">
        <div className="header-page-title">{pageInfo.title}</div>
        <div className="header-page-sub">{pageInfo.sub}</div>
      </div>
      <div className="header-right">
        <div className="header-btn">🔔<span className="notif-dot"></span></div>
        <div className="header-btn">📅</div>
        <span className={`role-tag badge ${roleColors[role] || 'badge-primary'}`}>
          {roleData.icon} {roleData.label}
        </span>
        <div
          className="user-avatar"
          style={{ width: 36, height: 36, fontSize: 13, cursor: 'pointer', background: roleData.color }}
          onClick={onLogout}
        >
          {roleData.initial}
        </div>
      </div>
    </header>
  );
}
