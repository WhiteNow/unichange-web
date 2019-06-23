import React from 'react';
import NavigationNavBar from '../../components/navigation';
import { BrowserRouter } from 'react-router-dom'
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

const Home = () => {
    return (<NavigationNavBar/>);
}

const Container = () => {
    return ()
}

export default {Home, Container}