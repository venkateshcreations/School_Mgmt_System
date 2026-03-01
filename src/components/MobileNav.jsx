import { ROLES } from '../data/roles';

export default function MobileNav({ role, currentPage, onNavigate }) {
  const roleData = ROLES[role];

  return (
    <div className="mobile-nav">
      <div className="mobile-nav-inner">
        {roleData.mobileNav.map(item => (
          <div
            key={item.id}
            className={`mobile-nav-item${currentPage === item.id ? ' active' : ''}`}
            onClick={() => onNavigate(item.id)}
          >
            <span className="mn-icon">{item.icon}</span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
