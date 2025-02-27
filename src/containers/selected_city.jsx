import React, {Component} from "react";
import { connect } from 'react-redux';

class SelectedCity extends Component {

    getImageUrl = () => {
        return `https://www.lewagon.com/api/v1/cities/${this.props.selectedCity.slug}/cover?width=1200`;
    }

    render(){
        if (!this.props.selectedCity.name) {
            return (
              <div className="active-city">
                <p>Select a city...</p>
              </div>
            );
          }
        return(
            <div  className="active-city">
                <p>{this.props.selectedCity.name}</p>
                <img src={this.getImageUrl()}></img>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        selectedCity: state.selectedCity
    }
}

export default connect(mapStateToProps, null) (SelectedCity);