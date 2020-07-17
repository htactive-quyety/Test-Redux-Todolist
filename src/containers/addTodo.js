import React, { Component } from 'react'
import { Input, Form, Row, Col } from 'antd'
import { ADD_TODO } from '../actions/index'
import { connect } from 'react-redux'

class AddTodo extends Component {

    state = {
        text: '',
    }

    onSubmit = (event) => {
        if (event.key === 'Enter') {
            this.props.addTodo(this.state.text)
            this.setState({ text: '' })
        }
    }
    render() {
        return (
            <div className='container'>
                <p></p>
                <Row>
                    <Col span={8}></Col>
                    <Col span={6}>
                        <Form  >
                            <Form.Item >
                                <Input
                                    onPressEnter={this.onSubmit}
                                    value={this.state.text}
                                    onChange={event => this.setState({ text: event.target.value })}
                                    placeholder='Type here for add a new todo' ></Input>
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col span={8}></Col>
                </Row>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => ({
    addTodo: (text) => dispatch(ADD_TODO(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);