import React from "react";
import {BrowserRouter,Routes as Switch,Route} from 'react-router-dom'
import Home from "./views/pages/Home";
import Login from "./views/pages/Login";
import Menu from "./views/pages/Menu";
export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Home />} />
                <Route path="/login"element={<Login />}  />   
                <Route path="/menu" element={<Menu />} />
            </Switch>
        </BrowserRouter>
    )
}