import type { ReactNode } from 'react';
import styles from './Card.module.css';

export function Card({ children, title }: { children: ReactNode; title?: string }) {
  return (
    <div className={styles.card}>
      {title && <h3 className={styles.title}>{title}</h3>}
      {children}
    </div>
  );
}