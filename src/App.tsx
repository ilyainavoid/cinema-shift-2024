import type { FC } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './Router.tsx';

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
