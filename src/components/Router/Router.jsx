import React from 'react'
import Home from '../Home'
import Form from '../Form'
import Error from '../Error'
import {Route,Switch,Redirect} from'react-router-dom'

export default function Router() {
    return (
        <>
        <Switch>

        
        <Route exact path="/">
            <Home />
        </Route>
        
        
         <Route exact path="/service">
            <Redirect to="/form" />
        </Route>

        <Route path="/home" render={() => <div><h1> Home  </h1> </div>} />

        <Route exact path="/form" component={Form} />


        <Route exact path="/blog/:id" component={ require('../Blog').default} />
        


        <Route>
            <Error />
        </Route>
        </Switch>
            
        </>
    )
}
