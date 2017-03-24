import Config from './Config';
import Store from 'react-native-simple-store';
import {
	Alert
} from 'react-native';

class Api {

	constructor() {
		// La classe Api.js conservera un objet `user`, qui contiendra des valeurs null par défaut
		this.user = Object.assign({}, this.defaultUser); // Création d'un clone de l'objet this.defaultUser
		// Note: Object.assign() n'est pas disponible en ES5
	}

	defaultUser = {
		_id: null,
		token: null,
		account: {
			username: null,
			favorites: []
		}
	};

	getEvents(cat, callback) {
		console.log('getEvents cat is : ', cat);
		console.log(Config.host);
		fetch(`${Config.host}/api/events/?category=${cat}`).then(res => res.json()).then(events => {
			console.log("events", events);
			callback(events)
		}).catch(error => {
			console.log(error);
		})
	}

	authenticate(user) {
		Store.save('user', user).then(() => {
			console.log('Saved');
		});
	}

	logIn(user = {}, callback) {
		fetch(`${Config.host}/api/users/log_in`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(user)
		}).then(res => res.json()).then(json => {
			if (!json.error) {
				this.authenticate(json);
				console.log('logged');
				console.log(json);
				callback(json);
			} else {
				console.log('error', json.error);
				Alert.alert('Bad login')
				console.log(json);
			}

		});
	}
	logOut(callback) {
		Store.delete('user').then(() => {
			console.log('Deleted');
			callback();
		});
	}

}

export default new Api();
