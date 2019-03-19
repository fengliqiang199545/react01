import React from 'react';



class TodoList extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      username:'111',
      itemList:[

      ]
    }

  }

  removec(key){
    // alert(key)
    var templist = this.state.itemList
    templist.splice(key,1);

    this.setState({
      itemList: templist
    })
  }

  render () {
    return (
      <div>
        <h1>TodoList 案例演示</h1>
        <input type="text" ref="data"/>  <button onClick={this.addData}>增添事项</button>
        <hr/>
        <h2>待办事项</h2>
        <ul>
          {
            this.state.itemList.map( (value, key) =>{
              return <li key={key}>{value} <button onClick={this.removec.bind(this,key)}>删除</button></li>

            })
          }
        </ul>
        <hr/>
        <h2>已完成事项</h2>

      </div>
    )
  }

  addData =()=> {

    var templist = this.state.itemList;
    templist.push(this.refs.data.value);
    this.refs.data.value = '';


    this.setState({
      itemList: templist
    })



  }
}

TodoList.propTypes = {}

export default TodoList