import {FC} from "react";
import HeaderMenuItem from "../HeaderMenuItem/HeaderMenuItem.tsx";
import styles from './headersection.module.scss'
import userIcon from '../../assets/svg/user.svg';
import ticketsIcon from '../../assets/svg/tickets.svg';
import exitIcon from '../../assets/svg/exit.svg';
import logo from '../../assets/svg/shiftcinema-logo.svg'

const HeaderSection: FC = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.menuItemsList}>
                    <div className={styles.leftMenu}>
                        <HeaderMenuItem icon={logo as string} key='playbill'></HeaderMenuItem>
                        <HeaderMenuItem icon={userIcon as string} key='profile'>Профиль</HeaderMenuItem>
                        <HeaderMenuItem icon={ticketsIcon as string} key='tickets'>Билеты</HeaderMenuItem>
                    </div>
                    <HeaderMenuItem icon={exitIcon as string} key='exit'>Выйти</HeaderMenuItem>
                </ul>
            </nav>
        </header>
    )

}
export default HeaderSection;
