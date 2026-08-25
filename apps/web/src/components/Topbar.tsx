import { Bell } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { Avatar } from './Avatar';
import styles from './Topbar.module.css';

export function Topbar() {
  const { user, signOut } = useAuth();

  return (
    <header className={styles.topbar}>
      <div />
      <div className={styles.right}>
        <button className={styles.iconButton} aria-label="Notifications">
          <Bell size={18} />
        </button>
        <div className={styles.userMenu}>
          <Avatar name={user?.name ?? user?.email ?? '?'} />
          <span className={styles.userName}>{user?.name ?? user?.email}</span>
          <button className={styles.logoutButton} onClick={signOut}>
            Log out
          </button>
        </div>
      </div>
    </header>
  );
}