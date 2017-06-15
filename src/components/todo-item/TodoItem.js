import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as todosAction from '../../actions/todos'
const status = ['undo', 'finished'];

class TodoItem extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = { content: '', todolist: props.todoState.todolist };
        this._handleKeyPress = this._handleKeyPress.bind(this);
        this._handleChange = this._handleChange.bind(this);
        this._getItemsView = this._getItemsView.bind(this);
        this._handTypeChange = this._handTypeChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.todoState.showing === status[0]) {
            this.state.todolist = nextProps.todoState.undoList;
        } else {
            this.state.todolist = nextProps.todoState.finishedList;
        }
        this.setState({});
    }

    _getItemsView(todolist) {
        return todolist.map((item) => {
            let color = item.status === 'undo' ? 'red' : 'green';
            let value = item.status === 'undo' ? 'finish' : 'undo';
            let s = item.status === 'undo' ? status[1] : status[0];
            return <div
                style={{ width: '95%', height: 50, border: 'solid 1px black', textAlign: 'center', padding: 10, margin: 10 }}
                key={item.id}>
                <input
                    style={{ float: 'left', marginTop: 15 }}
                    type="button"
                    value={value}
                    onClick={() => this.props.actions.chanegTodoStatus(item.id, s)} />
                {item.content}
                <input
                    style={{ float: 'right', marginTop: 15 }}
                    type="button"
                    value="Remove"
                    onClick={() => this.props.actions.removeTodoItem(item.id)} />
                <p style={{ color: color }}>status:{item.status}</p>
            </div>
        });
    }

    _handleKeyPress(e) {
        if (e.which === 13) {
            //press Enter
            var todoItem = { id: '', content: '', status: '' };
            todoItem.content = this.state.content;
            todoItem.id = this._getNextId();
            todoItem.status = status[0];
            this.props.actions.addTodoItem(todoItem);
            this.setState({content:''});
        }
    }

    _getNextId() {
        var max = 0;
        this.props.todoState.todolist.forEach(v => {
            if (v.id > max) max = v.id;
        });
        return max + 1;
    }

    _handleChange() {
        var dom = document.getElementById('inputDom');
        this.setState({ content: dom.value });
    }

    _handTypeChange(type) {
        this.props.actions.chanegShowType(type);
        this.setState({});
    }

    render() {
        return (<div>
            <input style={{ display: 'inline-block', marginRight: 30 }} type="button" value="Check Finished" onClick={() => this._handTypeChange(status[1])} />
            <textarea
                id="inputDom"
                rows="5"
                cols="80"
                placeholder="input your target..."
                value={this.state.content}
                onChange={this._handleChange}
                onKeyPress={this._handleKeyPress} />
            <input style={{ display: 'inline-block', marginLeft: 30 }} type="button" value="Check UnDo" onClick={() => this._handTypeChange(status[0])} />
            <br />
            {this._getItemsView(this.state.todolist)}
        </div>);
    }
}

export default connect(
    state => ({
        todoState: state.default
    }),
    dispatch => ({ actions: bindActionCreators(todosAction, dispatch) })
)(TodoItem)



function makeRandomId() {
    return parseInt(Math.random() * 10000000);
}