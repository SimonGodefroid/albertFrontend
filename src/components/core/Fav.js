import React from 'react';

import {
    StyleSheet,
    Text,
    Image,
    View,
    ScrollView,
    ActivityIndicator,
    ListView,
    TouchableOpacity,
} from 'react-native';

import Api from '../../Api';
import Config from '../../Config';
import Global from '../../Global';
import Icon from 'react-native-vector-icons/Ionicons';

class Fav extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
      star : false,
    }
    console.log('constructor star', this.state.star);
  }

  componentDidMount() {
    if (Api.getUser().account.favorites.indexOf(this.props.idEvent) !== -1) {
      this.setState({
        star: true
      })
    }
    console.log('componentDidMount star', this.state.star);
    console.log('componentDidMount star', Api.getUser().account.favorites.indexOf(this.props._id));
  }

  // componentDidMount() {
  //  console.log('componentDidMount$profileScene')
  //  console.log('componentDidMount$Api.getUser()',Api.getUser()._id);
  //    Api.getFavoriteEvents(Api.getUser()._id,(favoritesList) => {
  //      console.log("getFavoriteEvents object values", Object.keys(favoritesList));
  //      console.log('this.props.idEvent',typeof this.props.idEvent);
  //      console.log('indexOfthis.props.idEvent',favoritesList.indexOf(this.props.idEvent));
  //      if(favoritesList.indexOf(this.props.idEvent)!==-1){
  //        this.setState({
  //          star: true
  //        })
  //      }
  //    })
  //
   // if (Api.getUser().account.favorites.indexOf(this.props.idEvent) !== -1) {
   //   this.setState({
   //     star: true
   //   })
   // }
   // console.log('componentDidMount star', this.state.star);
   // console.log('componentDidMount star', Api.getUser().account.favorites.indexOf(this.props._id));

  addToFav(userId, eventId, callback){
    console.log("coucou addFav");
    fetch(`${Config.host}/api/user/${userId}/toggleFavorite/${eventId}`, {
      method: "POST"
    })
    this.setState({
      star: !this.state.star,
    })
  }

  render() {
    console.log('fav userId', Api.getUser()._id);
    console.log('fav userId', Api.getUser().account.favorites);
    console.log('fav idevent', this.props.idEvent);
    console.log('fav thisprops', this.props);
    console.log('render star', this.state.star);
    return(
      <TouchableOpacity  onPress={() =>this.addToFav(Api.getUser()._id, this.props.idEvent)}>
        <Icon name={this.state.star ? 'ios-star' : 'ios-star-outline'} size={35} style={{backgroundColor: 'transparent'}} color={Global.thirdColor} />
      </TouchableOpacity>
    );
  }
}

export default Fav;
