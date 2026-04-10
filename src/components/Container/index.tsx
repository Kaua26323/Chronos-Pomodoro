import type React from 'react';
import style from './container.module.css';

interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <div className={style.container}>
      <div className={style.content}>{children}</div>
    </div>
  );
}
