import React, { Component } from 'react'
import { Button, Row, Col, Tabs, Menu } from 'antd'
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import Todolist from './todoList'
import Addtodolist from './addTodo'
import {MailOutlined} from '@ant-design/icons';
import '../asset/menu.css'
const { TabPane } = Tabs;
const { SubMenu } = Menu;

export default class menu extends Component {
    render() {
        return (
            <Row>
                <Col span={6}>
                    <Menu onClick={this.handleClick}
                        style={{ width: 256 }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark">
                        <SubMenu key="sub1"
                            title={
                                <span>
                                    <MailOutlined />
                                    <span>AAAA</span>
                                </span>
                            }></SubMenu>
                            <SubMenu key="sub2"
                            title={
                                <span>
                                    <MailOutlined />
                                    <span>BBBB</span>
                                </span>
                            }></SubMenu>
                            <SubMenu key="sub3"
                            title={
                                <span>
                                    <MailOutlined />
                                    <span>CCCCC</span>
                                </span>
                            }></SubMenu>
                            <SubMenu key="sub4"
                            title={
                                <span>
                                    <MailOutlined />
                                    <span>DDDDD</span>
                                </span>
                            }></SubMenu>
                            <SubMenu key="sub5"
                            title={
                                <span>
                                    <MailOutlined />
                                    <span>Todo</span>
                                </span>
                            }></SubMenu>
                    </Menu>
                </Col>
                <Col span={18}>
                    <div className="card-container">
                        <Tabs type="card" tabPosition='right' >
                            <TabPane tab="All" key="1" >
                                <Todolist />
                            </TabPane>
                            <TabPane tab="Uncompleted" key="2">
                                <Todolist showUncompleted />
                            </TabPane>
                            <TabPane tab="Completed" key="3">
                                <Todolist showCompleted />
                            </TabPane>
                        </Tabs>
                    </div>
                </Col>
            </Row>
        )
    }
}
