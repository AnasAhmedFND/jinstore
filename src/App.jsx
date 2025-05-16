
import './App.css'
import './index.css'
import {  createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";
import Routlayout from './Components/Routlayout';
import Home from './Pages/Home';
import Abouts from './Pages/Abouts';
import Shops from './Pages/Shops';
import Carts from './Pages/Carts';
import Details_p from './Pages/Details_p';
import Blog_p from './Pages/Blog_p';

function App() {  
  let my_Router = createBrowserRouter(createRoutesFromElements (
    <Route element={<Routlayout />} >
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<Abouts />} />
      <Route path='/shop' element={<Shops/> } />
      <Route path='/cart' element={<Carts/> } />
      <Route path='/Details_/:id' element={<Details_p /> } />
      <Route path='/blog' element={<Blog_p />} />      


    </Route>


  ) )

  
  return (
    <>
  <RouterProvider router={my_Router} />
    </>
  )
}

export default App
