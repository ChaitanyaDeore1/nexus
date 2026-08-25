import type { ReactNode } from 'react';
import styles from './Badge.module.css';

type BadgeVariant = 'default' | 'success' | 'warning' | 'danger';

export function Badge({
  children,
  variant = 'default',
}: {
  children: ReactNode;
  variant?: BadgeVariant;
}) {
  return <span className={`${styles.badge} ${styles[variant]}`}>{children}</span>;
}