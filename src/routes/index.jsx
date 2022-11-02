
import { Route, Routes as RoutesDom } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
// import Route from './Routes';

function Routes(){
  return(
    <RoutesDom>
      <Route path='/' element={<Home/>}/>
      <Route path='/produtos' element={<Products/>}/>
    </RoutesDom>
  )
}

export default Routes;