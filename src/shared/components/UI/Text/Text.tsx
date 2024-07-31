import type { ComponentProps, FC, ReactNode } from 'react';
import classNames from 'classnames';

import './Text.scss';

interface TextProps extends ComponentProps<'p'> {
  children: ReactNode;
  format:
    | 'text-regular'
    | 'text-bold'
    | 'text-light'
    | 'semi-bold'
    | 'text-medium'
    | 'text-semi-bold';
}

const Text: FC<TextProps> = ({ children, format, className }) => {
  return <p className={classNames('text', format, className)}>{children}</p>;
};

export default Text;
