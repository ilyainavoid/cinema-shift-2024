import './App.css'
import {router} from "./Router.tsx";
import {RouterProvider} from "react-router-dom";

function App() {

  return (
      <RouterProvider router={router}/>
  )
}

export default App
