import React from 'react'

class LikeVue extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      username:"默认值"
    }

  }

  render () {
    return (
      <div>
        <h1>双向数据绑定</h1>
        <br/>
        <input type="text" onChange={this.passUsername} value={this.state.username}/>
        <br/>
        <button onClick={this.showUsername}></button>
      </div>
    )
  }

  passUsername=(e)=> {
    this.setState({
      username: e.target.value
    });



  }

  showUsername =()=> {
    alert(this.state.username)
  }
}

LikeVue.propTypes = {}

export default LikeVue