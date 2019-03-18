import React from  'react';

class ReactForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      msg:"React 表单",
      name:"",
    }

  }

  render () {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <form onSubmit={this.handleSubmit}>
          <input ref="name" type="text" value={this.state.name} onChange={this.passToname}/><br/>
          <input type="submit" defaultValue="提交"/>
        </form>

      </div>
    )
  }

  passToname =()=> {
    this.setState({
      name: this.refs.name.value
    })
  }

  handleSubmit =()=> {
    alert(this.state.name);
  }
}

ReactForm.propTypes = {}

export default ReactForm