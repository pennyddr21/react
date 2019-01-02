import React from 'react';
import api from '../static/js/api';

class SubHome extends React.Component {
    constructor(props) {
        super(props);
        this.changeState = this.changeState.bind(this); // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
        this.state = {
            msg:'this is a msg .',
            isToggleOn: true
        };
    }
    changeState() {
        this.setState({
            msg : 'change this msg .',
            setNewMsg : 'new msg .',
            isToggleOn : !this.state.isToggleOn
        })
        console.log(this.refs.emailDom.value)
        // console.log(this.props.name)
        this.props.transParentValue('trans child value.') //子传值给父组件
    }
    requestData() {
        api.fetchMock()
    }
    render() {
        return (
            <div>
                <div>Home {this.props.name} component .</div>
                <div>获取state : {this.state.msg}</div>
                <div>获取setNewMsg : {this.state.setNewMsg}</div>
                <input ref="emailDom" defaultValue="default value." /><br/>
                <button onClick={this.changeState}>click change state.</button>
                <div>获取isToggleOn : {this.state.isToggleOn ? 'true':'false'}</div>
                <button onClick={this.requestData}>request btn.</button>
            </div>
        );
    }
}

// function SubHome(props) {
//     return <div>Home {props.name} component .</div>;
// }

export default SubHome;
