import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Input } from 'antd'
import { EditOutlined, CloseOutlined, CheckOutlined } from '@ant-design/icons'
import TextArea from 'antd/lib/input/TextArea';
import { UPDATE_TODO, DELETE_TODO, CHECKBOX_TODO } from '../actions/index'
import todos from '../reducers/todos';
import '../asset/todoList.css'
import Moment from 'react-moment'

class TodoList extends Component {

    state = {
        text: '',
        edit: false,
        editId: 0,
        complete: false,

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
        this.setState({ text: '' })
    }

    deleteTodoList = (id) => {
        this.props.deleteUser(id)
    }

    handleCheck = (id) => {
        this.props.updateCheck({id, complete: !this.state.complete})
        // const { updateCheck, dispatch } = this.props;
        // dispatch(CHECKBOX_TODO({ id, complete: !this.state.complete }))
    }

    render() {
        const { data } = this.props
        const { editId } = this.state
        if (!this.state.edit) {
            return (
                <div >
                    {data.map((todo, id) => (
                        <div key={id} id='todolist'>
                            <p></p>
                            <Row>
                                <Col span={6}>
                                    <Row>
                                        <Col span={5}> <Input type='checkbox' onClick={() => this.handleCheck(id)} defaultChecked={todo.complete}></Input></Col>
                                        <Col span={19}><Moment format="YYYY/MM/DD">{this.props.dateToFormat}</Moment></Col>
                                    </Row>

                                </Col>
                                <Col span={16}></Col>
                                <Col span={2}>
                                    <button onClick={() =>  this.editTodoList(id) } > <EditOutlined /></button>
                                    <button onClick={() => this.deleteTodoList(id)}><CloseOutlined /></button>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={4}>
                                    <p>{todo.text}</p>
                                </Col>
                                <Col span={18}></Col>
                                <Col span={2}></Col>
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
                                <Col span={6}>
                                    <Row>
                                        <Col span={5}> <Input type='checkbox' onClick={() => this.handleCheck(id)} defaultChecked={todo.complete}></Input></Col>
                                        <Col span={19}><Moment format="YYYY/MM/DD">{this.props.dateToFormat}</Moment></Col>
                                    </Row>
                                </Col>
                                <Col span={16}></Col>
                                <Col span={2}>
                                    <button onClick={() => this.updateTodoList(id)} > <CheckOutlined /></button>
                                    <button onClick={() => this.deleteTodoList(id)}><CloseOutlined /></button>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={3}>
                                </Col>
                                <Col span={10} className='editTextList'>
                                    <div>
                                        <TextArea
                                            maxLength={500} autosize={{ minRows: 4, maxRows: 4 }}
                                            className='editTextAread'
                                            onChange={event => this.setState({ text: event.target.value })}
                                            value={this.state.text || todo.text}>
                                        </TextArea>
                                    </div>
                                </Col>
                                <Col span={5}></Col>
                                <Col span={4}></Col>
                            </Row>
                        </div> :
                            <div key={id} id='todolist'>
                                <Row>
                                    <Col span={6}>
                                        <Row>
                                            <Col span={5}> <Input type='checkbox' onClick={() => this.handleCheck(id)} defaultChecked={todo.complete}></Input></Col>
                                            <Col span={19}><Moment format="DD/MM/YYYY">{this.props.dateToFormat}</Moment></Col>
                                        </Row>
                                    </Col>
                                    <Col span={16}></Col>
                                    <Col span={2}>
                                        <button onClick={() => this.editTodoList(id)} > <EditOutlined /></button>
                                        <button onClick={() => this.deleteTodoList(id)}><CloseOutlined /></button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={6} className='editTextList'>
                                        <p>{todo.text}</p>
                                    </Col>
                                    <Col span={16}></Col>
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
    updateCheck: (id, complete) => dispatch(CHECKBOX_TODO(id, complete )),
    deleteUser: (id) => dispatch(DELETE_TODO(id))
})


export default connect(mapStateProps,mapDispatchToProps)(TodoList);