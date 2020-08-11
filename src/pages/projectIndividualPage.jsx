import React, { Component } from 'react';
import HelloCubeWrapper from '../components/HelloCubeWrapper.js';
import HelloCubeWrapper2 from '../components/HelloCubeWrapper2.js';

export default class ProjectIndividualPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id
        };
    }

    render(){
        return (
            <div>
                <h1>This is project {this.state.id}</h1>

                {this.state.id === '0' && <HelloCubeWrapper/>}
                {this.state.id === '1' && <HelloCubeWrapper2/>}
                
            </div>
        );
    }

}