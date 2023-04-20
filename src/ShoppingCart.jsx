import React, { Component } from 'react'
import ProductsList from './ProductsList.jsx'
import CartTitle from './CartTitle.jsx'

class ShoppingCart extends Component {
  state = {
    cartItems: [
      {
        id: '1',
        name: 'iPhone 11',
        price: 999,
      },
      {
        id: '2',
        name: 'iPad Pro',
        price: 799,
      },
    ],
  }
  render() {
    const { firstName, lastName } = this.props.userData
    const { cartItems } = this.state
    const count = cartItems.length
    return (
      <div className='column'>
        <CartTitle userName={`${firstName} ${lastName}`} count={count} />
        <ProductsList cartItems={cartItems} />
      </div>
    )
  }
}

export default ShoppingCart
