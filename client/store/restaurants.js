import axios from "axios";


const SET_RESTAURANTS = "SET_RESTAURANTS"
const CREATE_RESTAURANT = "CREATE_RESTAURANT"
const DELETE_RESTAURANT = "DELETE_RESTAURANT"


const setRestaurants = (restaurants) => ({
  type: SET_RESTAURANTS,
  restaurants
});

const _createRestaurant = (restaurant) => ({
  type: CREATE_RESTAURANT,
  restaurant
})

const _deleteRestaurant = (restaurant) => ({
  type: DELETE_RESTAURANT,
  restaurant
})

export const fetchRestaurants = () => async (dispatch) => {
    const {data} = await axios.get('/api/restaurants');
    dispatch(setRestaurants(data));
  };

export const createRestaurant = (restaurant, history) => {
  return async (dispatch) => {
    const {data: created} = await axios.post('api/restaurants', restaurant)
    dispatch(_createRestaurant(created));
    history.push('/')
  }
}

export const deleteRestaurant = (id) => {
  return async(dispatch) => {
    const {data: restaurant} = await axios.delete(`/api/restaurants/${id}`)
    dispatch(_deleteRestaurant(restaurant))
  }
}

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function restaurantsReducer(restaurants = [], action) {
  switch (action.type){
    case SET_RESTAURANTS:
      return action.restaurants;
    case CREATE_RESTAURANT:
      return [...restaurants, action.restaurant];
    case DELETE_RESTAURANT:
        return restaurants.filter((restaurant) => restaurant.id !== action.restaurant.id);
    default:
          return restaurants;
  }
}