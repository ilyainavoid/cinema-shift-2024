import { FC } from 'react';
import exitIcon from '../../assets/svg/exit.svg';
import logo from '../../assets/svg/shiftcinema-logo.svg';
import ticketsIcon from '../../assets/svg/tickets.svg';
import userIcon from '../../assets/svg/user.svg';
import HeaderMenuItem from '../HeaderMenuItem/HeaderMenuItem.tsx';
import styles from './headersection.module.scss';

const HeaderSection: FC = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.menuItemsList}>
                    <div className={styles.leftMenu}>
                        <HeaderMenuItem
                            icon={logo as string}
                            route="home"
                        ></HeaderMenuItem>
                        <HeaderMenuItem
                            icon={userIcon as string}
                            route="profile"
                        >
                            Профиль
                        </HeaderMenuItem>
                        <HeaderMenuItem
                            icon={ticketsIcon as string}
                            route="tickets"
                        >
                            Билеты
                        </HeaderMenuItem>
                    </div>
                    <HeaderMenuItem icon={exitIcon as string} key="exit">
                        Выйти
                    </HeaderMenuItem>
                </ul>
            </nav>
        </header>
    );
};
export default HeaderSection;
