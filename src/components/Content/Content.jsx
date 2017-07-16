import React from 'react';
import {Route,Switch} from 'react-router-dom'
import Home from '../Content/Home';
import About from '../Content/About';
import Contact from '../Content/Contact';
export default class Content extends React.Component{
    render(){
        return(
            <div>
               <Switch>
                        <Route exact path="/Home" component={Home}/>
                        <Route path="/About" component={About}/>
                        <Route path="/Contact" component={Contact}/>
               </Switch>
            </div>           
        )
    }
}