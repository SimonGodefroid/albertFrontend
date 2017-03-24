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
import TabIcon from './src/components/core/TabIcon';
// import AlbertIcon from './src/components/core/AlbertIcon';

class App extends React.Component {
  render() {
    return(
      <Router
        leftButtonIconStyle={{ tintColor: 'white' }}
        navigationBarStyle={{ backgroundColor: '#5bbcb2'}}
        hideNavBar={true}>
        <Scene
          key={'signup'}
          component={SignupScene}/>
        <Scene
          key={'login'}
          component={LoginScene}
          initial={true}/>
				<Scene
          key={'search'}
          component={SearchScene} />
				<Scene
          key={'profile'}
          component={ProfileScene} />
        <Scene
          key={'editProfile'}
          component={EditProfileScene}/>
        <Scene
          key={'results'}
          component={ResultsScene}/>
        <Scene
          key={'product'}
          component={ProductScene}/>
      </Router>
    );
  }
}

export default App;
