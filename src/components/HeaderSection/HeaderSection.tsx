import type { FC } from 'react';

import exitIcon from '@/assets/svg/exit.svg';
import logo from '@/assets/svg/shiftcinema-logo.svg';
import ticketsIcon from '@/assets/svg/tickets.svg';
import userIcon from '@/assets/svg/user.svg';

import HeaderMenuItem from '../HeaderMenuItem/HeaderMenuItem.tsx';

import styles from './Headersection.module.scss';

const HeaderSection: FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.menuItemsList}>
          <div className={styles.leftMenu}>
            <HeaderMenuItem icon={logo} route='home' />
            <HeaderMenuItem icon={userIcon} route='profile'>
              Профиль
            </HeaderMenuItem>
            <HeaderMenuItem icon={ticketsIcon} route='tickets'>
              Билеты
            </HeaderMenuItem>
          </div>
          <HeaderMenuItem icon={exitIcon} route='exit'>
            Выйти
          </HeaderMenuItem>
        </ul>
      </nav>
    </header>
  );
};
export default HeaderSection;
