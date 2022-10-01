import axios from 'axios';

const SET_RESTAURANT = "SET_RESTAURANT"
const UPDATE_RESTAURANT = "UPDATE_RESTAURANT"
const UNREGISTER_USER = "UNREGISTER_USER"

export const setRestaurant = (restaurant) => ({
  type: SET_RESTAURANT,
  restaurant
});

const _updateRestaurant = (restaurant) => ({
  type: UPDATE_RESTAURANT,
  restaurant
})

const _unregisterUser = (user) => ({
  type: UNREGISTER_USER,
  restaurant
})


export const fetchRestaurant = (id) => async (dispatch) => {
    const {data} = await axios.get(`/api/restaurants/${id}`);
    dispatch(setRestaurant(data));
  };

export const updateRestaurant = (restaurant) => {
  return async (dispatch) => {
    const {data: updated} = await axios.put(`/api/restaurants/${restaurant.id}`, restaurant)
    dispatch(_updateRestaurant(updated));
  }
}

export const unregisterUser = (user, restaurant) => {
  return async (dispatch) => {
    const {data: updated} = await axios.put(`api/restaurants/${restaurant.id}/user`, user)
    dispatch(_unregisterUser(updated));
  }
}

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function restaurantReducer(restaurant = {}, action) {
  switch (action.type){
    case SET_RESTAURANT:
      return action.restaurant;
    case UPDATE_RESTAURANT:
      return action.restaurant;
    case UNREGISTER_USER:
      return action.restaurant;
    default:
      return restaurant;
  }
}