import Config from './Config';

class googleApi {
	getPlaces(category, callback) {
		let types = "";
		switch (category) {
			case 1:
				types = "restaurant|meal_takeaway|food";
				break;
			case 2:
				types = "bar|cafe";
				break;
			case 3:
				types = "gym";
				break;
			case 4:
				types = "night_club";
				break;
			case 5:
				types = "museum";
				break;
			case 6:
				types = "clothing_store|department_store|furniture_store|home_goods_store|shoe_store|shopping_mall";
				break;
			case 7:
				types = "amusement_park|aquarium|bowling_alley|hindu_temple|movie_theater|park|spa|zoo";
				break;
			case 8:
				types = "university|library";
				break;
		}
		fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${Config.apiKey}&location=48.8569613,2.3687517&rankBy=distance&radius=1000&types=${types}`)
    .then(res => res.json())
    .then(places => {
			console.log("Places", places);
			callback(places)
		}).catch(error => {
			console.log(error);
		})
	}
}

export default new googleApi();
