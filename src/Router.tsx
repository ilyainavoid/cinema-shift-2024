import {createBrowserRouter} from "react-router-dom";
import PlaybillPage from "./pages/PlaybillPage/PlaybillPage.tsx";
import {ROUTES} from "./consts/routes.ts";
import Layout from "./components/Layout/Layout.tsx";
import FilmPage from "./pages/FilmPage/FilmPage.tsx";

export const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <Layout/>,
        children: [
            {
                path: ROUTES.HOME,
                element: <PlaybillPage/>
            },
            {
                path: ROUTES.FILM,
                element: <FilmPage/>
            }
        ]
    }
])