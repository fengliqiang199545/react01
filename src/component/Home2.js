import React from 'react';

class Home2 extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      username:"H1 组件展示",
      // home2:""
      keydown:"键盘按下",
    }

  }

  render () {
    return (
      <div>
        <h1>{this.state.username}</h1>
        <br/>
        <input ref="username" type="text" onChange={this.passField}/>
        <br/>
        <button onClick={this.showChange}>修改数据</button>
        <br/>
        <h1>键盘事件</h1>
        <input ref="butt" type="text" onKeyDown={this.keyDown}/>
        <br/>

      </div>
    )
  }

  showChange=()=> {
    // alert(this.state.username);
    this.setState({
      username:this.passField()
    })
  }


  passField =()=> {
    // let val = this.refs.username.value;
    return this.refs.butt.value;

  }

  keyDown =(e)=> {
    // alert(this.state.keydown);
    console.log(e.keyCode);
    if (e.keyCode === 13){
      this.showChange()
    }

  }
}

Home2.propTypes = {}

export default Home2