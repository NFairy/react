import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

class RouteMap extends React.Component{
    render(){
        const {routes}=this.props;
        const defaultRoute=<Route path="/" component={()=>{
            return <Redirect to="/index/home"></Redirect>
        }} key={1} exact></Route>
        return <Switch>
            {
                routes.map((item,index)=>{
                    const Com=item.component;
                    return <Route path={item.path} component={(router)=>{
                        return <Com routes={item.children} {...router}></Com>
                    }} key={index}></Route>
                }).concat(defaultRoute)
            }
        </Switch>
    }
}

export default RouteMap;