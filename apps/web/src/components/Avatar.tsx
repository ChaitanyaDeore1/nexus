
import styles from './Avatar.module.css';

export function Avatar({ name }: { name: string }) {
  const initial = name.trim().charAt(0).toUpperCase();
  return <div className={styles.avatar}>{initial}</div>;
}