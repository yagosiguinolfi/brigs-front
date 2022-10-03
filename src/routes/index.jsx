
import { Route, Routes as RoutesDom } from 'react-router-dom';
import Home from '../pages/Home';
// import Route from './Routes';

function Routes(){
  return(
    <RoutesDom>
      <Route path='/' element={<Home/>}/>
    </RoutesDom>
  )
}

export default Routes;