import React from 'react';
import { Route as ReactDOMRoute, Navigate } from 'react-router-dom';

function Route({ isPrivate = false, component: Component, ...rest }) {
  const user = localStorage.getItem('@Brigs:user')

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        // return isPrivate === !!user ? (
          return <Component />
        // ) : (
        //   <Navigate to={{ pathname: isPrivate ? '/': '/dashboard',
        //     state: { from: location},}}/>
        // )
      }}
    />
  )
}

export default Route;