import ReactDOM from "react-dom/client";
// import {Routes, Route, Router, Redirect, BrowserRouter} from "react-router-dom"
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from '../routes'
import {MAIN_ROUTE} from '../utils/const'

function AppRouter() {
    const isAuth = false
  return (
    <Routes>
       {isAuth && authRoutes.map(({path, Component}) =>
    <Route exact key={path} path={path} element={<Component/>}/>
    )}
     {publicRoutes.map(({path, Component}) =>
    <Route exact key={path} path={path} element={<Component/>}/>
    )}
    <Navigate to={MAIN_ROUTE}/>
    </Routes>

  )
}

export default AppRouter