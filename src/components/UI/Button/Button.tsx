import type { FC } from 'react';

import styles from './button.module.scss';

interface ButtonProps {
  className?: string;
  type: 'Transparent' | 'Primary';
  children: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ className, type, children, onClick }) => {
  const classnames = `${styles.button} ${styles[`button${type}`]} ${className || ''}`.trim();

  return (
    <button onClick={onClick} className={classnames}>
      {children}
    </button>
  );
};

export default Button;
