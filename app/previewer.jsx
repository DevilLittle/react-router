import React,{Component} from 'react';
import {Link} from 'react-router';

export default class Previewer extends Component{
    render(){
        return <div>
            <div>Previewer</div>
            <div>
                <div>This is the Previewer</div>
                <div><Link to='/editor'>Previewer</Link></div>
            </div>
        </div>
    }
}