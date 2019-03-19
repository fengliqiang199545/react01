import React from 'react'

class Header extends React.Component {
  constructor (props) {
    super(props)

    this.state = {

    }

  }

  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <button onClick={this.props.runM}>测试父方法</button>
        <button onClick={this.props.father.showlist}>测试父本体方法</button>
      </div>
    )
  }
}

Header.propTypes = {}

export default Header