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
  TouchableOpacity,
} from 'react-native';

import {
  Router,
  Scene,
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
    return(
      <Router
        leftButtonIconStyle={{ tintColor: 'white' }}
        navigationBarStyle={{ backgroundColor: '#5bbcb2'}}>
        <Scene
          key={'signup'}
          component={SignupScene}
          title={'Sign Up'}/>
        <Scene
          key={'login'}
          component={LoginScene}
          title={'Login'}/>
        <Scene
          key={'profile'}
          component={ProfileScene}
          title={'Profile'}/>
        <Scene
          key={'editProfile'}
          component={EditProfileScene}
          title={'Edit Profile'}/>
        <Scene
          key={'search'}
          component={SearchScene}
          hideNavBar={true}/>
        <Scene
          key={'results'}
          component={ResultsScene}
          title={'Results'}/>
        <Scene
          key={'product'}
          component={ProductScene}
          hideNavBar={true}
          initial={true}/>
        <Scene
          key={'menu'}
          component={MenuScene}
          title={'Menu'}/>
        <Scene
          key={'filter'}
          component={FilterScene}
          title={'Filter'}/>
      </Router>
    );
  }

}

const styles = StyleSheet.create({

});

export default App;
