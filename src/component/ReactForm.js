import React from  'react';



class ReactForm extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      msg:"React 表单",
      name:"",
      checkNum:'1',
      city:'北京',
      citys:[
        '北京',
        '上海',
        '成都'
      ],
      hobby: [
        {
          title: '吃饭',
          checked: null
        },
        {
          title: '睡觉',
          checked: null
        },
        {
          title: '敲代码',
          checked: null
        }
      ]


    }

  }

  render () {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <form onSubmit={this.handleSubmit}>
          <input ref="name" type="text" value={this.state.name} onChange={this.passToname}/><br/>
          <input type="radio" value="1" checked={this.state.checkNum == 1} onChange={this.handleradio}/> 男
          <input type="radio" value="2" checked={this.state.checkNum == 2} onChange={this.handleradio}/> 女
          <br/>
          <select value={this.state.city} onChange={this.handleselect}>
            {
              this.state.citys.map(function (value,key) {
                return (

                    <option  key={key}>{value}</option>

                )
              })
            }
          </select>
          <br/>
          爱好：
          {
            this.state.hobby.map((value,key) =>{
              return(
                <span key={key}>
                  <input type="checkbox" checked={value.checked} onChange={this.handlecheck.bind(this,key)}/>{value.title}
                </span>
              )
            })
          }

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

  handleSubmit =(e)=> {
    e.preventDefault();
    console.log(this.state.name,this.state.checkNum, this.state.city, this.state.hobby);
  }

  handleradio =(e)=> {
    this.setState({
      checkNum: e.target.value
    })
  }

  handleselect =(e)=> {
    this.setState({
      city: e.target.value
    })
  }

  handlecheck (key) {
    var hobby1 = this.state.hobby;
    hobby1[key].checked=!hobby1[key].checked;
    this.setState({
      hobby: hobby1
    })
  }
}

ReactForm.propTypes = {}

export default ReactForm