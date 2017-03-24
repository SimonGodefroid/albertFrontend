import React from 'react';

import {
  StyleSheet,
  Text,
  Dimensions,
  Image,
  View,
  ScrollView,
  ActivityIndicator,
  ListView,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {
  Actions,
} from 'react-native-router-flux';

import Api from '../Api';
import Global from '../Global';
import Button from '../components/core/Button';
import Favorites from '../components/user/Favorites';
import UserImage from '../components/user/UserImage';


let {
  height,
  width,
} = Dimensions.get('window');



class ProfileScene extends React.Component {
  render() {
    return(
      <View 
        style={
          {flex:1,
          alignItems:'center'}
        }>
        <View>
          <UserImage
            image={this.props.image}
            style={{borderRadius:25}}
          />
        </View>
        <View>
          <Text> Coucou </Text>
        </View>
        <View 
          style={
            {
              height:100,
              width:width-20,
              borderColor:'black',
              borderWidth:2,
              flexDirection:'row',
              justifyContent:'space-between'
            }
        }>
          <View>
            <Text>
              Clément{'\n'}
            </Text>
          </View>
          <View>
            <Text>
              Clément
            </Text>
          </View>
          <View>
            <Text>
              Clément
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default ProfileScene;
