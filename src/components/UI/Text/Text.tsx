import type { FC, ReactNode } from 'react';
import classNames from 'classnames';

import './Text.scss';

interface TextProps {
  children: ReactNode;
  style: 'text-regular' | 'text-bold' | 'text-light' | 'semi-bold';
  className?: string;
}

const Text: FC<TextProps> = ({ children, style, className }) => {
  return <p className={classNames('text', style, className)}>{children}</p>;
};

export default Text;
