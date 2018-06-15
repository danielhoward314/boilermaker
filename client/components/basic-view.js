import React, { Component } from 'react'
import Dashboard from './dashboard'
import { connect } from 'react-redux'
import Post from './post'
import Find from './find'
import Visualize from './visualize'
import { Link } from 'react-router-dom'

class BasicView extends Component {
  constructor(props){
    super(props)
    this.viewSwitch = this.viewSwitch.bind(this)
  }

  viewSwitch() {
    switch (this.props.location.pathname) {
      case '/post':
        {return <Post />}
      case '/find':
        {return <Find />}
      case '/visualize':
        {return <Visualize />}
      default :
        {return <p>Post will be the default component</p>}
    }
  }

  render() {
    if (!this.props.isLoggedIn) return <p>You should probably <Link to='/'>log in</Link> before we let you do stuff.</p>
    return (
      <div className='basic-container'>
        <div className='dashboard-container'>
          <Dashboard className='dashboard' />
        </div>
        <div className='main-container'>
          {this.viewSwitch()}
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    ...state,
    isLoggedIn: !!state.user.id
  }
}


export default connect(mapState, null)(BasicView)


