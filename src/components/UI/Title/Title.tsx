import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import './title.scss';

interface TitleProps {
    children: ReactNode;
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    style: 'title-regular' | 'title-bold' | 'title-light';
    className?: string;
}

const Title: FC<TitleProps> = ({ children, as: Tag, style, className }) => {
    return (
        <Tag className={classNames('text', style, className)}>{children}</Tag>
    );
};

export default Title;
