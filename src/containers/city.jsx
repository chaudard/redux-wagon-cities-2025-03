import React, {Component} from "react";

class City extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="list-group-item">
                {this.props.city.name}
            </div>
        )
    }

}

export default City;