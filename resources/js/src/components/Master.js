import React, { Component } from "react";

class Master extends Component {
    render() {
        return (
            <div className="container-fluid">
                <nav class="navbar navbar-light bg-light">
                    <div class="container-fluid">
                        <span class="navbar-brand mb-0 h1">
                            Dynamic Location Selector Helper
                        </span>
                    </div>
                </nav>
                <div className="container">{this.props.children}</div>
            </div>
        );
    }
}
export default Master;
