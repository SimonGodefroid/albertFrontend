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
      <Image source={require('../../assets/img/bg-v.png')} style={styles.container}>
        <View style={styles.logo_container}>
          <UserImage
            image={this.props.image}
            style={
              {
                borderRadius:75,
                width:150,
                height:150,
              }
            }
          />
          <View style={
            {
              paddingTop:10,
              alignItems: 'center', 
            }
          }>
            <Text>{this.props.user.account.username.toUpperCase()}</Text>
            <Text> 28 ans - Homme - albert@albert.com</Text>
          </View>
        </View>
      </Image>



/*      
      <View 
        style={
          {
            alignItems:'center',
            marginTop:20,
          }
      }>
        <Image source={require('../../assets/img/bg-v.png')} style={{height:300}}>
        <View
          style={{zIndex:999}}>
          <UserImage
            image={this.props.image}
            style={
              {
                borderRadius:75,
                width:150,
                height:150,
              }
            }
          />
          </View>
          <View style={
            {
              paddingTop:10,
              alignItems: 'center', 
            }
          }>
            <Text>{this.props.user.account.username.toUpperCase()}</Text>
            <Text> 28 ans - Homme - albert@albert.com</Text>
          </View>
        </Image>
      </View>*/
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        alignItems: 'center',
        width:null,
        resizeMode: 'cover',
        padding: 20
    },
    logo_container: {
        alignItems: 'center'
    },
    logo: {
        width: 170,
        height: 180
    },
});


export default ProfileScene;
