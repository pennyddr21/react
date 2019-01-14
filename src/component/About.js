import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            params:'app trans home .'
        };
        this.linkUrl = this.linkUrl.bind(this);
        console.log(this.props)
    }
    linkUrl() {
        this.props.history.push('/TestArea')
    }
    render() {
        return (
            <div className="aboutBox">
                <h3>About Page</h3>
                <div>Route传值参数 : {this.props.match.params.id}</div>
                <button onClick={this.linkUrl}>click react links</button>
            </div>
        );
    }
}

export default About;
