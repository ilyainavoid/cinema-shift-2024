import {FC, ReactNode} from "react";
import '../../../styles/text.scss'

interface TextProps {
    children: ReactNode;
    style: 'text-regular' | 'text-bold' | 'text-light' | 'semi-bold';
    className?: string;
}

const Text: FC<TextProps> = ({children, style, className}) => {
    return (
        <p className={`text ${style} ${className}`}>{children}</p>
    );
}

export default Text;