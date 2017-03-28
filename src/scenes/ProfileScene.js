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
import Swiper from 'react-native-swiper';



let {
  height,
  width,
} = Dimensions.get('window');


class ProfileScene extends React.Component {
  render() {
    return(
      <ScrollView>
      <Image source={require('../../assets/img/bg-v.png')} style={styles.container}>
        <View style={styles.profile_container}>
          <UserImage
            image={this.props.image}
            style={styles.user_image}
          />
          <View style={styles.name_desc}>
            <Text>{this.props.user.account.username.toUpperCase()}</Text>
            <Text> 28 ans - Homme - albert@albert.com</Text>
          </View>
        </View>
      </Image>
      <View style={{flexDirection:'row',flex:1}}>
        
        </View>
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
      </ScrollView>
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
    padding: 20,
    height:300
  },
  profile_container: {
    alignItems: 'center'
  },
  name_desc: {
    paddingTop:10,
    alignItems: 'center', 
    backgroundColor: 'transparent'
  },
  user_image: {
    borderRadius:75,
    width:150,
    height:150,
  },
  profile_elements:{
    flex:1,
    padding:10
  },  
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});






export default ProfileScene;
