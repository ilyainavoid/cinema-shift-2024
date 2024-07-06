import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router.tsx';

const App: FC = () => {
    return <RouterProvider router={router} />;
};

export default App;
