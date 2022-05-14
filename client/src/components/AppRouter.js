import { useContext } from "react";
import ReactDOM from "react-dom/client";
import {Routes, Route, Router, Redirect, BrowserRouter, Navigate} from "react-router-dom"
import { Context } from "../index";
import { authRoutes, publicRoutes } from '../routes'

function AppRouter() {
    const {user} = useContext(Context)

    console.log(user)
  return (
    <Routes>
       {user.isAuth && authRoutes.map(({path, Component}) =>
    <Route exact key={path} path={path} element={Component}/>
    )}
     {publicRoutes.map(({path, Component}) =>
    <Route exact key={path} path={path} element={Component}/>
    )}
    <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
  )
}

export default AppRouter