import React, {Component} from "react";
import City from "./city";

class CityList extends Component {
    constructor (props){
        super(props);
    }

    renderCity(city){
        return(
            <City city={city} key={city.name}></City>
        )
    }

    render(){
        return(
            <div className="cities">
                {this.props.cities.map((city) => this.renderCity(city))}
            </div>
        )
    }

}

export default CityList;