import React from "react";
import Routes from "./routes";
import RouteMap from "./map";

class RouteView extends React.Component{
    render(){
        const { routes } = this.props;
        return <RouteMap routes={routes===undefined ? Routes : routes}></RouteMap>
    }
}

export default RouteView;