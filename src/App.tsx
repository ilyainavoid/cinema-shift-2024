import './App.css'
import {router} from "./Router.tsx";
import {RouterProvider} from "react-router-dom";
import {FC} from "react";

const App: FC = () => {
  return (
      <RouterProvider router={router}/>
  )
}

export default App
