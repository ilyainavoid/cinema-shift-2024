import { createBrowserRouter } from 'react-router-dom';

import AuthorizationPage from '@/pages/AuthorizationPage/AuthorizationPage.tsx';
import FilmPage from '@/pages/FilmPage/FilmPage.tsx';
import PlaybillPage from '@/pages/PlaybillPage/PlaybillPage.tsx';
import Layout from '@/shared/components/Layout/Layout.tsx';
import { ROUTES } from '@/shared/consts/routes.ts';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <PlaybillPage />
      },
      {
        path: ROUTES.FILM,
        element: <FilmPage />
      },
      {
        path: ROUTES.AUTHORIZATION,
        element: <AuthorizationPage />
      }
    ]
  }
]);
