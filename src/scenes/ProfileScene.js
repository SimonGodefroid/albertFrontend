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
import Loading from '../components/core/Loading';
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
    console.log('componentDidMount$profileScene')
    console.log('componentDidMount$Api.getUser()',Api.getUser()._id);
      Api.getFavoriteEvents(Api.getUser()._id,(favoritesList) => {
      console.log("getFavoriteEvents",favoritesList);
      this.setState({
        favoritesResults: favoritesList,
      });
    });
  }

  renderSlides(){

    if(this.state.favoritesResults.length === 0){
      return <Text>Vous n'avez pas de favoris</Text>
    }

    console.log('this.state.favoritesResults',this.state.favoritesResults);
    const slides = this.state.favoritesResults.map((result,
        index) => <View key={index}>
        <TouchableOpacity onPress={() => Actions.event({product: result, idEvent:result._id})}>
        {console.log('coucou result',result)}
        {console.log('coucou idEvent : result._id',result._id)}
        {console.log('coucou result',result)}
          <EventsCard
            photo={result.image.url}
            title={result.title}
            place={result.place.name}
            date={result.evenements.realDateStart.slice(8,10)}
            month={result.evenements.realDateStart.slice(5,7)}
            hourStart={result.evenements.periodes[0].seances.length > 0 ? result.evenements.periodes[0].seances[0].hourStart.slice(0, 5) : '00:00'}
            hourEnd={result.evenements.periodes[0].seances.length > 0 ? result.evenements.periodes[0].seances[0].hourEnd.slice(0, 5) : '00:00' }
            category={result.evenements.category.lvl1}/>
        </TouchableOpacity>
        </View>)

      return (
        <View style={styles.swiper_container}>
          <Text>Voici vos Favoris</Text>
          <Swiper height={200} showsButtons={false} onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
          dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          paginationStyle={{
            bottom: -23, left: null, right: 10
          }} loop>
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
