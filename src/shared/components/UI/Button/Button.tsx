import type { ComponentProps, FC, ReactNode } from 'react';
import LoadingIndicator from '@ui/LoadingIndicator/LoadingIndicator.tsx';

import styles from './Button.module.scss';

interface ButtonProps extends ComponentProps<'button'> {
  appearance: 'transparent' | 'primary' | 'text';
  children: ReactNode;
  loading?: boolean;
}

const Button: FC<ButtonProps> = ({
  className,
  appearance,
  loading,
  children,
  onClick,
  type = 'button'
}) => {
  const classnames = `${styles.button} ${styles[`button${appearance}`]} ${className || ''}`.trim();

  return (
    <button type={type} onClick={onClick} className={classnames}>
      {loading ? <LoadingIndicator /> : children}
    </button>
  );
};

export default Button;
