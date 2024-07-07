import type { FC } from 'react';
import { Outlet } from 'react-router-dom';

import HeaderSection from '../HeaderSection/HeaderSection.tsx';

const Layout: FC = () => {
  return (
    <>
      <HeaderSection />
      <Outlet />
    </>
  );
};

export default Layout;
