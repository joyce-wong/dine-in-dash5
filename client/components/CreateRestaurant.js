import React, {Component} from 'react';
import { createRestaurant } from '../store/restaurants';
import { connect } from 'react-redux';
import { Button} from '@material-ui/core';

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
            <form className="restaurant-form" onSubmit={handleSubmit}>
                <div>
                <label htmlFor="name">Name:</label>
                <input name="name" onChange={handleChange} value={name} />
                {/* <TextField id="filled-basic" htmlFor="name" label="Name:" variant="filled" input name="name" onChange={handleChange} value={name}/> */}

                <label htmlFor="address">Entry:</label>
                <input className="journal-field" name="address" onChange={handleChange} value={address} />

                <button type="submit">Submit</button>
                {/* <Button variant="contained" color="primary">
  Submit
</Button> */}
  {/* <Button variant="outlined" color="primary">
  Submit
  </Button> */}
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
