import { useState } from 'react';

const ROLES = [
  { key: 'admin', icon: '🏫', label: 'Admin' },
  { key: 'principal', icon: '👔', label: 'Principal' },
  { key: 'teacher', icon: '👩‍🏫', label: 'Teacher' },
  { key: 'student', icon: '🎒', label: 'Student' },
  { key: 'parent', icon: '👨‍👩‍👧', label: 'Parent' },
  { key: 'accountant', icon: '💰', label: 'Accountant' },
];

export default function LoginScreen({ onLogin }) {
  const [selectedRole, setSelectedRole] = useState('admin');
  const [email, setEmail] = useState('admin@greenvalley.edu.in');
  const [password, setPassword] = useState('password123');

  const handleLogin = () => onLogin(selectedRole);

  return (
    <div className="login-screen">
      <div className="login-wrap">
        <div className="login-hero">
          <div className="login-hero-badge">🎓 Green Valley Public School</div>
          <h1>Smart School<br />Management<br /><span>Made Simple</span></h1>
          <p>A unified platform for admins, teachers, students, parents, and accountants — tailored for Indian schools.</p>
          <div className="hero-features">
            <div className="hero-feat"><span>✓</span> CBSE / ICSE / State Board compatible</div>
            <div className="hero-feat"><span>✓</span> Role-based isolated dashboards</div>
            <div className="hero-feat"><span>✓</span> Real-time analytics &amp; charts</div>
            <div className="hero-feat"><span>✓</span> GST-compliant fee management</div>
            <div className="hero-feat"><span>✓</span> Fully responsive, mobile-friendly</div>
          </div>
        </div>

        <div className="login-card">
          <div className="login-logo">
            <div className="login-logo-icon">🎓</div>
            <div className="login-logo-text">
              <h2>EduCore SMS</h2>
              <p>School Management Software</p>
            </div>
          </div>
          <div className="login-title">Welcome back</div>
          <p className="login-sub">Select your role to access your dashboard</p>

          <div className="role-grid">
            {ROLES.map(r => (
              <div
                key={r.key}
                className={`role-btn ${selectedRole === r.key ? 'active' : ''}`}
                onClick={() => setSelectedRole(r.key)}
              >
                <span className="ri">{r.icon}</span>
                {r.label}
              </div>
            ))}
          </div>

          <div className="form-group">
            <label className="form-label">Email / Staff / Student ID</label>
            <input
              className="form-input"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              className="form-input"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
          <button className="login-btn" onClick={handleLogin}>
            Sign In → Access Dashboard
          </button>
          <div className="login-demo-note">
            Demo: Select any role above · <strong>password123</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
