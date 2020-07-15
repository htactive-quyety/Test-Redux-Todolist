import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Row, Col, Input } from 'antd'
import { EditOutlined, CloseOutlined ,CheckOutlined} from '@ant-design/icons'
import TextArea from 'antd/lib/input/TextArea';
import { UPDATE_TODO, DELETE_TODO } from '../actions/index'
import todos from '../reducers/todos';
// const { TabPane } = Tabs;

class TodoList extends Component {
    
    state = {
     text: this.props.todos.text,
        edit: false,
        textedit:'',
        editId: 0,
        checked: false

    }

    editTodoList = (id) => { 
        this.setState((state) => ({
            edit: !state.edit,
            editId: id,
        }));

    }

    updateTodoList = (id) => {
     this.props.updateUser(id,this.state.text);
     this.setState((state) => ({
        edit: !state.edit,
    }));
    }

    deleteTodoList = (id) => {
        this.props.deleteUser(id)
    }

    handleCheck = () =>{
        this.setState({checked: !this.state.checked});
    }



    render() {
        const {editId} = this.state
        if (!this.state.edit) {
        
        return (
            <div id='todolist'>
                {this.props.todos.map((todo, id) => (
                    <div key={id}>
                        <p></p>
                        <Row>
                            <Col span={4}>
                                <Input type='checkbox'
                                ></Input>
                            </Col>
                            <Col span={18}></Col>
                            <Col span={2}>
                                <button onClick={() => {
                                    this.editTodoList(id)
                                }} > <EditOutlined /></button>
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
                <div id='todolist'>
                    {this.props.todos.map((todo,id) => (
                        ( editId === id) ? <div key={id}>
                            <p></p>
                            <Row>
                                <Col span={4}>
                                    <Input type='checkbox'
                                    onClick={()=> this.clickCheckBox}
                                    ></Input>
                                </Col>
                                <Col span={18}></Col>
                                <Col span={2}>
                                    <button onClick={() => this.updateTodoList(id)} > <CheckOutlined /></button>
                                    <button onClick={() => this.deleteTodoList(id)}><CloseOutlined /></button>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={2}>
                                </Col>
                                <Col span={4}>
                                    <TextArea  onChange={event => this.setState({ text: event.target.value })}  placeholder={todo.text} value={this.state.text} ></TextArea>
                                </Col>
                                <Col span={16}></Col>
                                <Col span={2}></Col>
                            </Row>
                        </div> : 
                        <div key={id}>
                            <p></p>
                            <Row>
                                <Col span={4}>
                                <Input type='checkbox' ></Input>
                                    {/* <Input type='checkbox' onChange={this.handleCheck} defaultChecked={this.state.checked}></Input> */}
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
// return (
//     <div id='todolist'>
//         {this.props.todos.map((todo, i) => (
//             <div key={i}>
//                 <p></p>
//                 <Row>
//                     <Col span={4}>
//                         <Input type='checkbox'></Input>
//                     </Col>
//                     <Col span={18}></Col>
//                     <Col span={2}>
//                         <button onClick={() => this.editTodoList(todo.id)}> <EditOutlined /></button>
//                         <button><CloseOutlined /></button>
//                     </Col>
//                 </Row>
//                 {
//                     this.state.editId ?
//                         <Row>
//                             <Col span={2}></Col>
//                             <Col span={6}>
//                                 <TextArea value={todo.text}></TextArea>
//                             </Col>
//                             <Col span={18}></Col>
//                         </Row> :
//                         <Row>
//                             <Col span={4}>
//                                 <p>{todo.text}</p>
//                             </Col>
//                             <Col span={18}></Col>
//                             <Col span={2}>
//                             </Col>
//                         </Row>
//                 }
//             </div>
//         ))}
//     </div>
// )




const mapStateProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateUser: (id,text) => dispatch(UPDATE_TODO(id, text)),
    deleteUser: (id) => dispatch(DELETE_TODO(id))
})


export default connect(mapStateProps, mapDispatchToProps)(TodoList);