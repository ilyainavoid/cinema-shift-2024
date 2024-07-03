import {createBrowserRouter} from "react-router-dom";
import Playbill from "./pages/Playbill/Playbill.tsx";
import {ROUTES} from "./consts/routes.ts";
import Layout from "./components/Layout/Layout.tsx";

export const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <Layout/>,
        children: [
            {
                path: ROUTES.HOME,
                element: <Playbill/>
            }
        ]
    }
])