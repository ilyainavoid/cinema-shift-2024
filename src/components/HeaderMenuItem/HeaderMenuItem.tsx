import type { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import Text from '@ui/Text/Text.tsx';

import { ROUTES } from '@/consts/routes.ts';

import styles from './Headermenuitem.module.scss';

interface HeaderMenuItemProps {
  icon: string;
  route: string;
  children?: ReactNode;
}

const HeaderMenuItem: FC<HeaderMenuItemProps> = ({ icon, route, children }) => {
  const navigate = useNavigate();
  const handleMenuClick = () => {
    const routeKey = route.toUpperCase();
    if (route === 'exit') {
      // TODO: Add logout function
    }
    navigate(ROUTES[routeKey]);
  };

  return (
    <li onClick={handleMenuClick}>
      <div className={styles.contentContainer}>
        <img src={icon} alt='' />
        <Text style='text-medium'>{children}</Text>
      </div>
    </li>
  );
};

export default HeaderMenuItem;
