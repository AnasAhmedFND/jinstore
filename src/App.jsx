
import './App.css'
import {  createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";
import Routlayout from './Components/Routlayout';
import Home from './Pages/Home';
import Abouts from './Pages/Abouts';


function App() {  
  let my_Router = createBrowserRouter(createRoutesFromElements (
    <Route element={<Routlayout />} >
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<Abouts />} />


    </Route>


  ) )

  
  return (
    <>
  <RouterProvider router={my_Router} />
    </>
  )
}

export default App
