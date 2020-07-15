import React, { Component } from 'react'
import { Button, Row, Col } from 'antd'
import Todolist from './todoList'

export default class menu extends Component {
    render() {
        return (
            <div>
                 <Row>
                    <Col span={10}></Col>
                    <Col span={8}></Col>
                    <Col span={6}>
                    <Button type="link">All</Button>
                    <Button type="link">Uncompleted</Button>
                    <Button type="link">Completed</Button>
                    </Col>
                </Row>
                
            </div>
        )
    }
}
