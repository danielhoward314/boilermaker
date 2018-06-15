import React, { Component } from 'react'
import { Login, Signup } from './auth-form'
import { connect } from 'react-redux'

class Home extends Component {
  constructor(props){
    super(props)
  }

  render() {
    console.log(this.props.isLoggedIn)
    return (
      <div>
        <Login />
        <Signup />
      </div>
    )
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

export default connect(mapState, null)(Home)
