import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PortfolioPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id
        };
    }

    render(){
        return (
            <div>
                <h1>This is the portfolio page</h1>

                <p>{'Project is number: ' + this.state.id}</p>

                <Link to="/" target="_blank">Link to main page</Link>
            </div>
        );
    }

}