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
import EventsCard from '../components/products/Events/EventsCard';
import Swiper from 'react-native-swiper';



let {
  height,
  width,
} = Dimensions.get('window');

class ProfileScene extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      favoritesResults:[],
    }
  }

  componentDidMount(){
    let results=[];
    for (var i = 0;i<this.props.user.account.favorites.length;i++){

      Api.getFavoriteEvents(this.props.user.account.favorites[i],(favoritesList) => {
      console.log("getFavoriteEvents",results);
        results.push(favoritesList);
        if(results.length===this.props.user.account.favorites.length){
          this.setState({
            favoritesResults: results,
          });
        }
      });
    }
  }

  renderSlides(){
    if(this.state.favoritesResults.length < 0){
      return <Text>Chargement...</Text>
    }
    const slides = this.state.favoritesResults.map((result,
        index) => <View key={index}>
        <EventsCard
          photo={result.event.image.url}
          title={result.event.title}
          place={result.event.place.name}
          category={result.event.evenements.category.lvl1}/>
            <Text>
                {result.event.title}</Text>
        </View>)
      return (
        <View style={styles.swiper_container}>
          <Swiper height={200} showsButtons={false} showsPagination={false}>
            {slides}
          </Swiper>
        </View>
      );

  }

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
            <Text> 26 ans - Homme - albert@albert.com</Text>
          </View>
        </View>
      </Image>
 {this.renderSlides()}

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
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
  text: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  swiper_container:{
    marginTop:20,
  }
});






export default ProfileScene;
