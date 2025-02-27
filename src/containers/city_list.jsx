import React, {Component} from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from "../actions";
import City from "./city";

class CityList extends Component {

    UNSAFE_componentWillMount() {
        this.props.setCities();
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { setCities: setCities },
        dispatch
    );
}

function mapStateToProps(state) {
    return {
        cities: state.cities
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CityList);