import type { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@shared/consts/routes.ts';
import Button from '@ui/Button/Button.tsx';
import Text from '@ui/Text/Text.tsx';

import styles from './Headermenuitem.module.scss';

interface HeaderMenuItemProps {
  icon: string;
  route: string;
  children?: ReactNode;
}

const HeaderMenuItem: FC<HeaderMenuItemProps> = ({ icon, route, children }) => {
  const navigate = useNavigate();
  const handleMenuClick = () => {
    console.log('here');
    if (route === 'exit') {
      // TODO: Add logout function
    }
    const routeKey = route.toUpperCase() as keyof typeof ROUTES;
    navigate(ROUTES[routeKey]);
  };

  return (
    <li>
      <Button appearance='MenuItem' onClick={handleMenuClick}>
        <div className={styles.contentContainer}>
          <img src={icon} alt='' />
          <Text format='text-medium'>{children}</Text>
        </div>
      </Button>
    </li>
  );
};

export default HeaderMenuItem;
