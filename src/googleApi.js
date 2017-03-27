import Config from './Config';
import Store from 'react-native-simple-store';
import {
	Alert
} from 'react-native';

class googleApi {
  getFood(callback) {
		fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${Config.apiKey}&location=48.8860323,2.3877194&radius=100&types=restaurant|meal_takeaway|food`)
		.then(res => res.json()).then(foodPlaces => {
			console.log("foodPlaces", foodPlaces);
			callback(foodPlaces)
		}).catch(error => {
			console.log(error);
		})
  }

  getDrinks() {
  }

  getShops() {
  }

  getRest() {
  }

  getWork() {
  }

  getDiscover() {
    fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${Config.apiKey}&location=48.8860323,2.3877194&radius=10000&types=museum`)
    .then(res => res.json()).then(discoverPlaces => {
      console.log("discoverPlaces", discoverPlaces);
      callback(discoverPlaces)
    }).catch(error => {
      console.log(error);
    })
  }


}

export default new googleApi();
