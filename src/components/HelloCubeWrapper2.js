import React, { Component } from 'react';
import helloCube from '../threeSrc/hello-cube';
import {Link} from 'react-router-dom';


export default class HelloCubeWrapper2 extends Component {
    componentDidMount(){
        helloCube(this.scene);
        helloCube(this.scene);
    }

    render(){
        return(
            <div>
                <div ref={element => this.scene = element} />
                <Link to="/"><button>This is 2</button></Link>
            </div>
        );
    }
}