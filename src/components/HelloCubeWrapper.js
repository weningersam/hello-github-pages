import React, { Component } from 'react';
import helloCube from '../threeSrc/hello-cube';

export default class HelloCubeWrapper extends Component {
    componentDidMount(){
        helloCube(this.scene);
    }

    render(){
        return(
            <div ref={element => this.scene = element} />
        );
    }
}