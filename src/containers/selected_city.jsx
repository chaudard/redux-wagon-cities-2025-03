import React, {Component} from "react";
import { connect } from 'react-redux';

class SelectedCity extends Component {

    render(){
        return(
            <div  className="active-city">
                {this.props.selectedCity.name}
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