import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  GitBranch,
  GitPullRequest,
  CircleDot,
  BarChart3,
  Sparkles,
  Settings,
} from 'lucide-react';
import styles from './Sidebar.module.css';

const NAV_ITEMS = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/repositories', label: 'Repositories', icon: GitBranch },
  { to: '/pull-requests', label: 'Pull Requests', icon: GitPullRequest },
  { to: '/issues', label: 'Issues', icon: CircleDot },
  { to: '/analytics', label: 'Analytics', icon: BarChart3 },
  { to: '/ai-insights', label: 'AI Insights', icon: Sparkles },
  { to: '/settings', label: 'Settings', icon: Settings },
];

export function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.logo}>Nexus</div>
      <ul className={styles.navList}>
        {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              <Icon size={18} />
              <span>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}