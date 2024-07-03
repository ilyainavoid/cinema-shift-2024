import {ElementType, FC, ReactNode} from "react";
import '../../../styles/title.scss'

interface TitleProps {
    children: ReactNode;
    level: 1 | 2 | 3 | 4 | 5 | 6;
    style: 'title-regular' | 'title-bold' | 'title-light';
}

const Title: FC<TitleProps> = ({ children, level, style }) => {
    let Tag: ElementType;

    switch (level) {
        case 1:
            Tag = 'h1';
            break;
        case 2:
            Tag = 'h2';
            break;
        case 3:
            Tag = 'h3';
            break;
        case 4:
            Tag = 'h4';
            break;
        case 5:
            Tag = 'h5';
            break;
        case 6:
            Tag = 'h6';
            break;
        default:
            Tag = 'h1';
    }

    return <Tag className={`title ${style}`}>{children}</Tag>;
};

export default Title;
