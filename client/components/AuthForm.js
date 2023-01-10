import React from 'react'
import {connect} from 'react-redux'
import {authenticate} from '../store'
import Button from '@material-ui/core/Button'
import { Container, CssBaseline, Box, Typography, Link, Grid, Avatar, LockOutlinedIcon, TextField } from '@material-ui/core'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Joyce Wong
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div id="auth">
    <Avatar>
        </Avatar>
        <Typography component="h1" variant="h5">
          {displayName}
        </Typography>
      <form onSubmit={handleSubmit} name={name}>
        <div>
          {/* <label htmlFor="username">
            <small>Username</small>
          </label> */}
          {/* <input name="username" type="text" /> */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            type="text"
          />
        </div>
        <div>
          {/* <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" /> */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </div>
        <div>
          {/* <button type="submit">{displayName}</button> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            // className={classes.submit}
          >
            {displayName}
          </Button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
        <Grid container>
            <Grid item>
              {displayName === "Login" ? <Link href="signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link> : <Link href="signup" variant="body2">
                {"Already have an account? Log In"}
              </Link>}
            </Grid>
          </Grid>
        </form>
    </div>
    <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.auth.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.auth.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const username = evt.target.username.value
      const password = evt.target.password.value
      dispatch(authenticate(username, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)
