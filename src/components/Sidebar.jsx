import { ROLES, USER_NAMES } from '../data/roles';

export default function Sidebar({ role, currentPage, onNavigate, onLogout, collapsed }) {
  const roleData = ROLES[role];
  const userName = USER_NAMES[role];

  const roleColors = { admin: 'primary', principal: 'purple', teacher: 'success', student: 'warning', parent: 'cyan', accountant: 'orange' };
  const badgeClass = roleColors[role] || 'primary';

  return (
    <aside className={`sidebar${collapsed ? ' collapsed' : ''}`} id="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo-icon">🎓</div>
        <div style={{ overflow: 'hidden', minWidth: 0 }}>
          <div className="sidebar-logo-text">EduCore SMS</div>
          <div className="sidebar-school">{roleData.school}</div>
        </div>
      </div>

      <nav className="sidebar-nav">
        {roleData.nav.map(section => (
          <div className="nav-section" key={section.s}>
            <div className="nav-section-title">{section.s}</div>
            {section.items.map(item => (
              <div
                key={item.id}
                className={`nav-item${currentPage === item.id ? ' active' : ''}`}
                onClick={() => onNavigate(item.id)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
                {item.badge && <span className="nav-badge">{item.badge}</span>}
              </div>
            ))}
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-user" onClick={onLogout}>
          <div
            className="user-avatar"
            style={{ width: 36, height: 36, fontSize: 14, background: roleData.color }}
          >
            {roleData.initial}
          </div>
          <div className="sidebar-user-info" style={{ overflow: 'hidden', minWidth: 0 }}>
            <div className="sidebar-user-name">{userName}</div>
            <div className="sidebar-user-role">{roleData.label}</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
