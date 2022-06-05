import React from "react";

function LocationItem() {
    return (
        <div className="mt-5">
            <div className="row justify-content-center my-auto">
                <div className="col-md-3">
                    <select
                        className="form-select form-select-lg mb-3"
                        aria-label=".form-select-lg example"
                    >
                        <option defaultChecked>Select Country</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <select
                        className="form-select form-select-lg mb-3"
                        aria-label=".form-select-lg example"
                    >
                        <option defaultChecked>Select State/Region</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <select
                        className="form-select form-select-lg mb-3"
                        aria-label=".form-select-lg example"
                    >
                        <option defaultChecked>Select City</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <select
                        className="form-select form-select-lg mb-3"
                        aria-label=".form-select-lg example"
                    >
                        <option defaultChecked>Select Township</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default LocationItem;
