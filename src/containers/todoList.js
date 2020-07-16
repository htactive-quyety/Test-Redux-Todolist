import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Row, Col, Input } from 'antd'
import { EditOutlined, CloseOutlined, CheckOutlined } from '@ant-design/icons'
import TextArea from 'antd/lib/input/TextArea';
import { UPDATE_TODO, DELETE_TODO, CHECKBOX_TODO } from '../actions/index'
import todos from '../reducers/todos';
import '../asset/todoList.css'

class TodoList extends Component {

    state = {
        text: this.props.todos.text,
        edit: false,
        editId: 0,
        complete: ''
    }

    editTodoList = (id) => {
        this.setState((state) => ({
            edit: !state.edit,
            editId: id,
        }));

    }

    updateTodoList = (id) => {
        this.props.updateUser(id, this.state.text);
        this.setState((state) => ({
            edit: !state.edit,
        }));
    }

    deleteTodoList = (id) => {
        this.props.deleteUser(id)
    }

    handleCheck = (id) => {
        this.props.updateCheck({ id, complete: !this.state.complete });
        this.setState((state) => ({
            complete: !state.complete,
        }));
    }

    render() {
        const { editId } = this.state
        const { todos, showCompleted, showUncompleted } = this.props
        const data = showCompleted ? todos.filter(todo => todo.complete) : (showUncompleted ? todos.filter(todo => !todo.complete) : todos)
        console.log(data);
        if (!this.state.edit) {
            return (
                <div >
                    {data.map((todo, id) => (
                        
                        <div key={id} id='todolist'> 
                            <p></p>
                            <Row>
                                <Col span={2}>
                                    <Input type='checkbox' onClick={() => this.handleCheck(id)} defaultChecked={todo.complete}></Input>
                                </Col>
                                <Col span={20}></Col>
                                <Col span={2}>
                                    <button onClick={() => { this.editTodoList(id) }} > <EditOutlined /></button>
                                    <button onClick={() => this.deleteTodoList(id)}><CloseOutlined /></button>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={4}>
                                    <p>{todo.text}</p>
                                </Col>
                                <Col span={18}></Col>
                                <Col span={2}>
                                </Col>
                            </Row>
                        </div>
                    ))}
                </div>
            )
        } else {
            
            return (
                <div >
                    {data.map((todo, id) => (
                        (editId === id) ? <div id='todolist' key={id}>
                            <p></p>
                            <Row>
                                <Col span={2}>
                                    <div></div>
                                    <div> <Input type='checkbox' onClick={() => this.handleCheck(id)} defaultChecked={todo.complete}></Input></div>
                                </Col>
                                <Col span={18}></Col>
                                <Col span={4}>
                                    <button onClick={() => this.updateTodoList(id)} > <CheckOutlined /></button>
                                    <button onClick={() => this.deleteTodoList(id)}><CloseOutlined /></button>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={3}>
                                </Col>
                                <Col span={5}>
                                    <TextArea className='editTextAread' onChange={event => this.setState({ text: event.target.value })} placeholder={todo.text} value={this.state.text} ></TextArea>
                                </Col>
                                <Col span={10}></Col>
                                <Col span={4}></Col>
                            </Row>
                        </div> :
                            <div key={id}>
                                <p></p>
                                <Row>
                                    <Col span={4}>
                                        <Input type='checkbox' onChange={this.handleCheck} defaultChecked={todo.complete}></Input>
                                    </Col>
                                    <Col span={18}></Col>
                                    <Col span={2}>
                                        <button onClick={() => this.editTodoList(id)} > <EditOutlined /></button>
                                        <button onClick={() => this.deleteTodoList(id)}><CloseOutlined /></button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={4}>
                                        <p>{todo.text}</p>
                                    </Col>
                                    <Col span={18}></Col>
                                    <Col span={2}>
                                    </Col>
                                </Row>
                            </div>
                    ))}
                </div>
            )
        }
    }
}



const mapStateProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateUser: (id, text) => dispatch(UPDATE_TODO(id, text)),
    updateCheck: (id, complete) => dispatch(CHECKBOX_TODO(id, complete)),
    deleteUser: (id) => dispatch(DELETE_TODO(id))
})


export default connect(mapStateProps, mapDispatchToProps)(TodoList);