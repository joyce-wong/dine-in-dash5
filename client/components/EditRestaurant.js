import React, {Component} from 'react';
import { fetchRestaurant, setRestaurant, updateRestaurant } from '../store/singleRestaurant';
import { connect } from 'react-redux';
import {TextField, Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'



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

class EditRestaurant extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            address: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

componentDidMount(){
    const {id} = this.props.match.params
    this.props.fetchRestaurant(id)
}

componentWillUnmount(){
    this.props.clearRestaurant()
}

componentDidUpdate(prevProps){
    if (prevProps.restaurant.id !== this.props.restaurant.id){
        this.setState({
            name: this.props.restaurant.name || '',
            address: this.props.restaurant.address || ''
        })
    }
}

handleChange(evt){
    this.setState({
        [evt.target.name]: evt.target.value
    })
}

handleSubmit(evt){
    evt.preventDefault()
    this.props.updateRestaurant({...this.props.restaurant, ...this.state})
}

render(){
    const {name, address} = this.state;
    const {handleSubmit, handleChange} = this;
    return (
        <div id='edit-restaurant'>
            <h3>Edit Entry</h3>
            <form onSubmit={handleSubmit}>
<TextField fullWidth id="outlined-basic" htmlFor="name" label="Title:" variant="outlined" margin="normal" input name="name" onChange={handleChange} value={name}/>
<TextField fullWidth id="outlined-multiline-flexible" htmlFor="address" label="Entry:" multiline rows={20} variant="outlined" margin="normal" input name="address" onChange={handleChange} value={address}/>
  <Button fullWidth type="submit" variant="contained" color="primary">
  Update
</Button>
            </form>
        </div>
        )
    }
}

const mapStateToProps = ({restaurant}) => ({
    restaurant
})

const mapDispatchToProps = (dispatch, {history}) => ({
    updateRestaurant: (restaurant) => dispatch(updateRestaurant(restaurant, history)),
    fetchRestaurant: (id) => dispatch(fetchRestaurant(id, history)),
    clearRestaurant: () => dispatch(setRestaurant({}))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditRestaurant)