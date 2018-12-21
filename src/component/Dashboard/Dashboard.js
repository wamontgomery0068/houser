import React, { Component } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// Imports from the Ducks Folder
import { getListings, removeListing } from "../../ducks/reducer";

class Dashboard extends Component {
    constructer(){
    }

    render() {
        return (
            <div className = "Wizard_Container">
                <h1> Wizard Component</h1>
            </div>
        )
    }
};

export default Dashboard;