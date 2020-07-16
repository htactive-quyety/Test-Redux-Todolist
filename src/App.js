import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import AddTodo from './containers/addTodo'
import Menu from './containers/menu'

const App = () => (
  <div className='App'>
      <AddTodo />
      <Menu />

  </div>
)

export default App;
