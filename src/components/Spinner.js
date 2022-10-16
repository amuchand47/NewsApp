import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center align-middle'>
        <img src={loading} alt="loading" srcSet="" />
      </div>
    )
  }
}

export default Spinner