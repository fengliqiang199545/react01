import React,{Component} from 'react';


class Home extends Component{

  constructor() {
    super();

    this.state={
      name : "张三",
      age: 23,
      personInfo:{
        id: 2,
        name:"fengliqiang",
        address: "beijing"
      },
      msg:"msg结果展示",
      inputField:""
    }
  }

  run(event){
    // alert("我是一个run 方法");
    // alert(event.target);
    alert(event.target.getAttribute("fuck"));
  }


  getData(){
    alert(this.state.msg)
  }

  getText=()=>{
    alert(this.state.inputField);
  }

  setName=(str)=>{
    this.setState({
      name:str
    })
  }

  render(){
    return(
      <div>
        <h1> 姓名：{this.state.name}</h1>
        <h1>年龄： {this.state.age}</h1>

        <p>{this.state.personInfo.id}</p>
        <p>{this.state.personInfo.name}</p>
        <p>{this.state.personInfo.address}</p>
        <br/><br/>
        <button fuck="hello react" onClick={this.run}>run</button>

        {/*表单事件*/}
        <br/>
          <h2>表单事件</h2>
        <input type="text" onChange={this.inputChange}/><br/>
        <button onClick={this.getText}>获取文本框的值</button>
        <br/>
        <button onClick={this.getData.bind(this)}>getData</button>
        <button onClick={this.setName.bind(this,"哈哈哈")}>setName</button>
      </div>
    )
  }

  inputChange=(e)=> {
    // console.log(e.target.value)
    // this.state.inputField = e.target.value;
    // this.setState(this.state.inputField,e.target.value);
    this.setState({
      inputField:e.target.value
    })
  }

}
export  default  Home;
