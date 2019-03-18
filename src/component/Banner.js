import React from "react";
import '../assets/css/index.css';
class  Banner extends React.Component{

  constructor (props, context) {
    super(props, context);

    this.state={
      msg: "我是一个组件"
    }
  }

  render () {
    return(
      <div>
        <h2 className='fontcolor'>{this.state.msg}</h2>
        <hr/>
        <h1>test</h1>
      </div>
    )
  }
}
export default Banner;