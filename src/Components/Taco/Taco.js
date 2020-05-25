import React, {Component} from "react";
import './Taco.css';

class Taco extends Component {

    render() {

        let taco = this.props.taco;

        return (
            <div className="Taco">
                {taco.tacoNumber} - {taco.name}
            </div>
        );
    }

}
export default Taco