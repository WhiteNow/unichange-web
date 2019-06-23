import React, {Component} from 'react';
import {NavigationNavBar} from '../../components';
import Route from 'react-router-dom/Route'
import {
    BrowserRouter,
    NavLink,
    HashRouter
  } from "react-router-dom";
import Formality from '../Formality';

class Home extends Component {
    render() {
        return <NavigationNavBar/>
    }
    
}

export default Home;
