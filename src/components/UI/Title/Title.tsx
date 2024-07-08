import type { ComponentProps, FC, ReactNode } from 'react';
import classNames from 'classnames';

import './Title.scss';

interface TitleProps extends ComponentProps<'h1'> {
  children: ReactNode;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  format: 'title-regular' | 'title-bold' | 'title-light' | 'text-bold';
}

const Title: FC<TitleProps> = ({ children, as: Tag, format, className }) => {
  return <Tag className={classNames('text', format, className)}>{children}</Tag>;
};

export default Title;
