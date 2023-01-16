import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import { Button } from '@material-ui/core'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    {/* <img className="logo" src="/assets/images/logo.png"/> */}
    <nav>
      {isLoggedIn ? (
        <div className="nav-container">
          {/* The navbar will show these links after you log in */}
      <div className="logo-container">
        <h1 id="title" className="logo-items">My Journal</h1>
      <img id="logo-image" className="logo-items" style={{display: 'block', marginRight: 'auto', marginLeft: 'auto', height: '10vh',}} src="assets/images/logo.png" alt="logo" w="10%"/>
      </div>
      <ul className="nav-links">
          <li className="nav-item"><Button href="/home" color="primary" variant="contained">
          Home
          </Button></li>
          <li className="nav-item"> <a href="#" onClick={handleClick}>
            Logout
          </a></li>
      </ul>
        </div>
      ) : (
        <div className='nav-container'>
          {/* The navbar will show these links before you log in */}
        <div className="logo-container">
          <h1 id="title" className="logo-items">My Journal</h1>
          <img id="logo-image" className="logo-items" style={{display: 'block', height: '10vh'}} src="assets/images/logo.png" alt="logo" w="10%"/>
        </div>
        <ul className="nav-links">
          <li className="nav-item"><Link to="/login">Login</Link></li>
          <li className="nav-item"> <Button href="/signup" color="primary" variant="contained">
          Sign Up
          </Button>
            </li>
        </ul>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)
