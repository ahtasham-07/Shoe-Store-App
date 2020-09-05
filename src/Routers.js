import React from 'react';
import Bar from './Components/appbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  
//Components Import
import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import ProductItem from './Components/ProductItem';


export default function Routers(){
    return(
        <Router>
            <Bar />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About} />
                <Route exact path='/products' component={Products} />
                <Route exact path='/products/:id' component={ProductItem} />
                <Route path='*' component={()=><h2 style={{textAlign:'center', color:'lightcoral'}}>page not found!</h2>} />
            </Switch>
        </Router>
    )
}
