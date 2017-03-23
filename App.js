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

import SignupScene from './src/scenes/SignupScene';
import LoginScene from './src/scenes/LoginScene';
import ProfileScene from './src/scenes/ProfileScene';
import EditProfileScene from './src/scenes/EditProfileScene';
import SearchScene from './src/scenes/SearchScene';
import ResultsScene from './src/scenes/ResultsScene';
import ProductScene from './src/scenes/ProductScene';
import MenuScene from './src/scenes/MenuScene';
import FilterScene from './src/scenes/FilterScene';

class App extends React.Component {
	render() {
		return (
			<Router leftButtonIconStyle={{
				tintColor: 'white'
			}} navigationBarStyle={{
				backgroundColor: '#5bbcb2'
			}} hideNavBar={true}>
				<Scene key={'signup'} component={SignupScene}/>
				<Scene key={'login'} component={LoginScene} initial={true}/>
				<Scene key={'profile'} component={ProfileScene}/>
				<Scene key={'editProfile'} component={EditProfileScene}/>
				<Scene key={'search'} component={SearchScene} hideNavBar={true}/>
				<Scene key={'results'} component={ResultsScene} hideNavBar={true}/>
				<Scene key={'product'} component={ProductScene}/>
				<Scene key={'menu'} component={MenuScene}/>
				<Scene key={'filter'} component={FilterScene}/>
			</Router>
		);
	}

}

export default App;
