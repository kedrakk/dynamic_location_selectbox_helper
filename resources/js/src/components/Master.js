import React, { Component } from "react";

class Master extends Component {
    render() {
        return (
            <div className="container-fluid">
                <nav className="navbar navbar-light bg-dark">
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1 text-white">
                            Dynamic Location Selector Helper
                        </span>
                    </div>
                </nav>
                <div className="container ">{this.props.children}</div>
                <div>{this.props.footer}</div>
            </div>
        );
    }
}
export default Master;
