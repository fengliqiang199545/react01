import React from 'react'
import Storage from '../model/storage'

class TodoList2 extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      list:[
        {
          title: "学习JAVA",
          checked:true
        },
        {
          title: "学习C",
          checked:false
        },
        {
          title: "学习PYTHON",
          checked:true
        },
        {
          title: "学习vue",
          checked:false
        },
        {
          title: "学习springboot",
          checked:false
        },
      ]
    }

  }

  checkchange=(key)=>{
    let list2 = this.state.list;
    list2[key].checked = !list2[key].checked;
    this.setState({
      list: list2
    })

    //执行缓存数据
    // localStorage.setItem('todolist',JSON.stringify(list2));
    Storage.set('todolist',list2);
  }

  componentDidMount () {
    //获取缓存的数据
    //var list = JSON.parse(localStorage.getItem("todolist"));   //获取到的事JSON字符串

    let list = Storage.get('todolist');

    if (list){
      this.setState({
        list:list
      })

    }


  }

  render () {
    return (
      <div>
        <input type="text" ref="data" onKeyDown={this.passdata}/>
        <br/>
        <hr/>
        <h2>待办事项</h2>
        <hr/>
        <ul>
          {
            this.state.list.map((value,key)=> {
              if (!value.checked) {
                return <li key={key}>
                  <input type="checkbox" checked={value.checked} onChange={this.checkchange.bind(this,key)}/>
                    {value.title}
                    <button onClick={this.removeitem.bind(this,key)}>删除</button>
                </li>
              }
              return false;
            })
          }
        </ul>
        <hr/>
        <h2>已办事项</h2>
        <hr/>
        <ul>
          {
            this.state.list.map( (value,key)=> {
              if (value.checked) {
                return <li key={key}>
                  <input type="checkbox" checked={value.checked} onChange={this.checkchange.bind(this,key)}/>
                  {value.title}
                  <button onClick={this.removeitem.bind(this,key)}>删除</button>
                </li>
              }
              return false;
            })
          }
        </ul>
      </div>
    )
  }

  passdata =(e)=> {
    if (e.keyCode == 13) {
      let templist = this.state.list;
      var item = {
        title: this.refs.data.value,
        checked: false
      }
      templist.push(item);
      this.refs.data.value = '';

      this.setState({
        list: templist
      })

      //执行缓存数据
      // localStorage.setItem('todolist',JSON.stringify(templist));
      Storage.set('todolist',templist);
    }
  }

  removeitem =(key)=> {
    let li = this.state.list;
    li.splice(key,1);
    this.setState({
      list:li
    })
    //执行缓存数据
    //localStorage.setItem('todolist',JSON.stringify(li));
    Storage.set('todolist',li);
  }
}

TodoList2.propTypes = {}

export default TodoList2