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
  Platform,
} from 'react-native';

import {
  Actions,
} from 'react-native-router-flux';

import Api from '../Api';
import Global from '../Global';
import AlbertTab from '../components/core/AlbertTab';
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
      return <Text>Vous n avez pas de favoris</Text>
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

          <Text style={styles.favoritesTitle}>Vos favoris</Text>
          <Swiper height={200} showsButtons={false} onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
          dot={<View style={{backgroundColor: 'grey', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          activeDot={<View style={{backgroundColor: 'white', width: 10, height: 10, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          paginationStyle={{
            top: -140, left: 0, right: -360
          }} loop>
            {slides}
          </Swiper>
        </View>
      );

  }

  render() {
   return(
     <View style={{flex: 1}}>
       <View style={{flex: 1}}>
         <View style={{height: 500, paddingTop: (Platform.OS === 'ios') ? 20 : 0}}>
           <Image source={require('../../assets/img/bg-v.png')} style={styles.container}>
             <View style={styles.profile_container}>
               <UserImage
                 image={this.props.image}
                 style={styles.user_image}
               />
               <View style={styles.name_desc}>
                 <Text style={styles.name}>{this.props.user.account.username.toUpperCase()}</Text>
                 <Text style={styles.userInfos}> 30 ans - Homme - Farid@albert.com</Text>
               </View>
             </View>
           </Image>
         {this.renderSlides()}
         </View>
       </View>
       <View>
         <AlbertTab
           filter={false}/>
       </View>
     </View>
   );
 }
}

const styles = StyleSheet.create({
  container: {
    paddingTop:10,
    alignItems: 'center',
    width:null,
    resizeMode: 'cover',
    padding: 20,
    height:310,
    paddingBottom:10,
  },
  profile_container: {
    alignItems: 'center'
  },
  name_desc: {
    paddingTop:10,
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  name: {
    fontSize:32,
    color:Global.secondColor,
    fontFamily: Global.secondFontBold,
    marginBottom:12,
  },
  userInfos:{
    fontSize:18,
    color:Global.secondColor,
    fontFamily: Global.secondFont,
    marginBottom:12,
  },
  user_image: {
    borderRadius:150,
    width:170,
    height:170,
    borderWidth:5,
    borderColor:Global.secondColor,
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
    marginTop: 15,
    marginBottom:0,
  },
  favoritesTitle: {
    fontSize:24,
    marginBottom:10,
    textAlign:'center',
  }
});

export default ProfileScene;
