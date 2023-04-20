import React, { Component } from 'react'
import ShoppingCart from './ShoppingCart.jsx'
import Profile from './Profile.jsx'

class App extends Component {
  state = {
    user: {
      firstName: 'John',
      lastName: 'Doe',
    },
  }
  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      user: {
        ...this.state.user,
        [name]: value,
      },
    })
  }
  render() {
    const { user } = this.state
    return (
      <div className='page'>
        <h1 className='title'>{`Hello, ${user.firstName} ${user.lastName}`}</h1>
        <main className='content'>
          <ShoppingCart userData={user} />
          <Profile userData={user} handleChange={this.handleChange} />
        </main>
      </div>
    )
  }
}

export default App
