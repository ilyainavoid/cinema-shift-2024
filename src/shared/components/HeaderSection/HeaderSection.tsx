import type { FC } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '@redux/store.ts';
import exitIcon from '@shared/assets/svg/exit.svg';
import logo from '@shared/assets/svg/shiftcinema-logo.svg';
import ticketsIcon from '@shared/assets/svg/tickets.svg';
import userIcon from '@shared/assets/svg/user.svg';

import HeaderMenuItem from '@/shared/components/HeaderMenuItem/HeaderMenuItem.tsx';

import styles from './Headersection.module.scss';

const HeaderSection: FC = () => {
  const isAuthorized = useSelector((state: RootState) => state.user.isAuthorized);
  console.log(isAuthorized);
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.menuItemsList}>
          <div className={styles.leftMenu}>
            <HeaderMenuItem icon={logo} route='home' />
            {isAuthorized && (
              <>
                <HeaderMenuItem icon={userIcon} route='profile'>
                  Профиль
                </HeaderMenuItem>
                <HeaderMenuItem icon={ticketsIcon} route='tickets'>
                  Билеты
                </HeaderMenuItem>
              </>
            )}
          </div>
          {isAuthorized ? (
            <HeaderMenuItem icon={exitIcon} route='exit'>
              Выйти
            </HeaderMenuItem>
          ) : (
            <HeaderMenuItem icon={exitIcon} route='authorization'>
              Войти
            </HeaderMenuItem>
          )}
        </ul>
      </nav>
    </header>
  );
};
export default HeaderSection;
