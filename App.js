import React from 'react';

import {
	Platform,
	StatusBar,
	StyleSheet,
	Text,
	Image,
	View,
	ScrollView,
	ActivityIndicator,
	ListView,
	TouchableOpacity
} from 'react-native';

import {
	Router,
	Scene
} from 'react-native-router-flux';
console.log('app');

import SignupScene from './src/scenes/SignupScene';
import LoginScene from './src/scenes/LoginScene';
import ProfileScene from './src/scenes/ProfileScene';
import EditProfileScene from './src/scenes/EditProfileScene';
import SearchScene from './src/scenes/SearchScene';
import ResultsScene from './src/scenes/ResultsScene';
import EventScene from './src/scenes/EventScene';
import PlaceScene from './src/scenes/PlaceScene';
import TabIcon from './src/components/core/TabIcon';
import Api from './src/Api';
import Loading from './src/components/core/Loading';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: undefined
		};
	}
	componentDidMount() {
		Api.getStore((user) => {
			this.setState({
				user: user
			});
			Api.setUser(user);
		})
	}
	render() {
		console.log(this.state.user)
		if (this.state.user === undefined) {
			console.log("loading...", this.state.user)
			return (
				<Loading/>
			)
		} else {
			console.log("identified user...", this.state.user)
			return (
				<Router leftButtonIconStyle={{
					tintColor: 'white'
				}} navigationBarStyle={{
					backgroundColor: '#5bbcb2'
				}} hideNavBar={true}>
					<Scene key={'signup'} component={SignupScene}/>
					<Scene key={'login'} component={LoginScene} initial={this.state.user === null ? true : false}/>
					<Scene key={'search'} component={SearchScene} initial={this.state.user !== null ? true : false}/>
					<Scene key={'profile'} component={ProfileScene}/>
					<Scene key={'editProfile'} component={EditProfileScene}/>
					<Scene key={'results'} component={ResultsScene}/>
					<Scene key={'event'} component={EventScene}/>
					<Scene key={'place'} component={PlaceScene}/>
				</Router>
			);
		}
	}
}

export default App;
