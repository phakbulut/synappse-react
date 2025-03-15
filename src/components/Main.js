import React, { Component } from 'react'

export default class Main extends Component {
  render() {
    return (
      <div>
        <div className="text-center mb-3">
      <img className="AppLogo" src={process.env.PUBLIC_URL + '/asset/images/applogo.png'} alt="AppLogo" />
   
    </div>
      </div>
    )
  }
}
