import type { ComponentProps, FC, ReactNode } from 'react';

import styles from './Button.module.scss';

interface ButtonProps extends ComponentProps<'button'> {
  appearance: 'Transparent' | 'Primary' | 'MenuItem';
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ className, appearance, children, onClick, type = 'button' }) => {
  const classnames = `${styles.button} ${styles[`button${appearance}`]} ${className || ''}`.trim();

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} onClick={onClick} className={classnames}>
      {children}
    </button>
  );
};

export default Button;
