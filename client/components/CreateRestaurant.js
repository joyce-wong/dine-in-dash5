import React, {Component} from 'react';
import { createRestaurant } from '../store/restaurants';
import { connect } from 'react-redux';
import { Button} from '@material-ui/core';
// import Hook from './Hook';

// import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

export function Hook() {
  const classes = useStyles();
  return <Button className={classes.root}>Hook</Button>;
}

class CreateRestaurant extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            address: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt){
        evt.preventDefault()
        this.props.createRestaurant({...this.state})
    }

    render() {
        const {name, address} = this.state
        const {handleSubmit, handleChange } = this

        return (
        <div id="create-restaurant">
                <h3>Create Entry</h3>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="name">Name:</label>
                <input className="title-field" name="name" onChange={handleChange} value={name} />
                {/* <TextField id="filled-basic" htmlFor="name" label="Name:" variant="filled" input name="name" onChange={handleChange} value={name}/> */}

                <label htmlFor="address">Entry:</label>
                <input className="journal-field" name="address" onChange={handleChange} value={address} />

                <button className ="submit" type="submit">Submit</button>
                {/* <Button variant="contained" color="primary">
  Submit
</Button> */}
  {/* <Button variant="outlined" color="primary">
  Submit
  </Button> */}
  {/* <Button className={classes.root}>Styled with Hook API</Button> */}
                </div>
            </form>
        </div>
        )
    }
}

const mapDispatchToProps = (dispatch, {history}) => ({
    createRestaurant: (restaurant) => dispatch(createRestaurant(restaurant, history))
})

export default connect(null, mapDispatchToProps)(CreateRestaurant)
