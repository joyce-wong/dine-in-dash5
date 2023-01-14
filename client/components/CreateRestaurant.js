import React, {Component} from 'react';
import { createRestaurant } from '../store/restaurants';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

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
                <TextField fullWidth id="outlined-basic" htmlFor="name" label="Name:" variant="outlined" margin="normal" input name="name" onChange={handleChange} value={name}/>
                <TextField fullWidth id="outlined-multiline-flexible" htmlFor="address" label="Entry:" multiline rows={20} variant="outlined" margin="normal" input name="address" onChange={handleChange} value={address}/>
                <Button fullWidth type="submit" variant="contained" color="primary">
  Submit
</Button>
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
