import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as constants from '../constants/constants.js'

export default class MainPage extends Component{

    render(){
        return (
            <div>
                <h1>This is the main page</h1>

                <Link to="/example/0" target="_blank">Link to project 0</Link>
                <br/>
                <Link to="/example/1" target="_blank">Link to project 1</Link>
            </div>
        );
    }

}