import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import helloCube from '../threeSrc/hello-cube';

export default class HelloCubeWrapper extends Component {
    componentDidMount(){
        helloCube(this.scene);
    }

    

    render(){
        return(
            <div>
                <div ref={element => this.scene = element} />
            </div>
        );
    }
}