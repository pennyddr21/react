import React from 'react';
import SubHome from './SubHome';
import '../static/css/home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            attr:'app trans home .'
        };
    }
    transParentValue(mode) {
        console.log(mode)
    }
    render() {
        const propName = 'const value .'
        return (
            <div className="homeBox">
                <div style={titleColor}>Home Page</div>
                <div>aaa:{this.props.name}</div>
                <div>home state : {propName}</div>
                <SubHome name={this.state.attr} transParentValue={mode=>this.transParentValue(mode)} />
            </div>
        );
    }
}

const titleColor = {
    color:'pink',
    fontSize:'18px'
}

export default Home;
