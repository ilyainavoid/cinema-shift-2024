import {FC, ReactNode} from "react";
import '../../../styles/text.scss'

interface TextProps {
    children: ReactNode;
    style: 'text-regular' | 'text-bold' | 'text-light';
}

const Text: FC<TextProps> = ({children, style}) => {
    return (
        <p className={`text ${style}`}>{children}</p>
    );
}

export default Text;