import React  from 'react'
import Header from '../component/Header'

class ShowFather extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      title:'heihei',
      list:[
        1,2,3
      ]
    }


  }
  showlist=()=>{
    alert(this.state.list)
  }

  run=()=>{
    alert("我是父组件的run方法")
  }
  render () {
    return (
      <div>
        <Header title={this.state.title} runM={this.run} father={this}/>
      </div>
    )
  }
}

ShowFather.propTypes = {}

export default ShowFather