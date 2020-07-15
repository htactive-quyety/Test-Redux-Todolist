import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import AddTodo from './containers/addTodo'
import Menu from './containers/menu'
import TodoList from './containers/todoList'

const App = () =>(
  <div className='App'>
    <AddTodo/>
    <Menu />
    <TodoList/>

  </div>
)

export default App;
