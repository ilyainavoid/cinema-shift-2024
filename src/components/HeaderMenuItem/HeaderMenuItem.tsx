import {FC, ReactNode} from "react";
import {useNavigate} from "react-router-dom";
import Text from './../UI/Text/Text.tsx'
import styles from './headermenuitem.module.scss'
import './headermenuitem.module.scss'
import {ROUTES} from "../../consts/routes.ts";

interface HeaderMenuItemProps {
    icon: string;
    key: string;
    children?: ReactNode
}

const HeaderMenuItem: FC<HeaderMenuItemProps> = ({icon, key, children}) => {
    const navigate = useNavigate();
    const handleMenuClick = () => {
        const routeKey = key.toUpperCase();
        if (key === 'exit') {
            // TODO: Add logout function
        }
        navigate(ROUTES[routeKey]);
    }

    return (
        <li onClick={handleMenuClick}>
            <div className={styles.contentContainer}>
                <img src={icon} alt=""/>
                <Text style="text-medium">{children}</Text>
            </div>
        </li>
    );
}

export default HeaderMenuItem;