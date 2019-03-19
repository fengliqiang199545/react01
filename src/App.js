import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
//引入Home组件
import Home from './component/Home';
import Banner from './component/Banner';
import News from './component/News';
import Home2 from './component/Home2';
import ReactForm from './component/ReactForm';
import Hei from './component/LikeVue'

import Todolist1 from './component/TodoList';
import Todolist2 from './component/TodoList2';

import ShowFather from './component/ShowFather'
class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<p>*/}
            {/*Edit <code>src/App.js</code> and save to reload.*/}
          {/*</p>*/}
          {/*<a*/}
            {/*className="App-link"*/}
            {/*href="https://reactjs.org"*/}
            {/*target="_blank"*/}
            {/*rel="noopener noreferrer"*/}
          {/*>*/}
            {/*Learn React*/}
          {/*</a>*/}
        {/*</header>*/}
        {/*Hello World!!*/}
        {/*<Home/>*/}
        {/*<News></News>*/}

        {/*<Home2></Home2>*/}
        {/*<hr/>*/}
        {/*<Hei></Hei>*/}
        {/*<br/>*/}
        {/*<hr/>*/}
        {/*<ReactForm/>*/}
        {/*<Banner/>*/}
      {/*<Todolist2/>*/}
      <ShowFather/>
      {/*<News/>*/}
      </div>
    );
  }
}

export default App;
