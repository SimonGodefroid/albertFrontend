import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Global from '../../../Global';
import Star from '../../core/Star';

class InfoProduct extends React.Component {

  // renderTags(tags) {
  //   var str="";
  //   for (var i = 0; i < tags.length; i++) {
  //     str + `#${tags[i]} `
  //   }
  //   return str;
  //   console.log("str", str);
  // }

  render() {
    const {
      name,
      category,
      openingHours,
      address,
      rating,
    } = this.props;

    return(
      <View>
        <View style={styles.placePresentation}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.category}>{category}</Text>
        </View>
        <View style={styles.placetimeHolder}>
          <Text style={styles.details}>Infos</Text>
          <View style={styles.listHolder}><View style={styles.iconHolder}><Icon name={'ios-time-outline'} size={24} style={{color:Global.mainColor}}/></View><View style={styles.textHolder}><Text style={styles.opening}>{openingHours}</Text></View></View>
          <View style={styles.listHolder}><View style={styles.iconHolder}><Icon name={'ios-pin-outline'} size={26} style={{color:Global.mainColor, paddingLeft:3,}}/></View><View style={styles.textHolder}><Text style={styles.place}>{address}</Text></View></View>
        </View>
        <View style={styles.ratingHolder}>
          <Text style={styles.details}>Note:</Text>
          <View style={styles.starview}>
            <Star
              rating={rating}/>
          </View>
        </View>
        <Text style={styles.lieu}>A propos du lieu</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  placePresentation:{
    backgroundColor: 'white',
    flexDirection: 'column',
    marginBottom: 2,
    paddingTop: 10,
    paddingRight: 5,
    paddingLeft: 15,
    paddingBottom: 15,
    flex: 1,
  },
      title:{
        fontFamily: Global.secondFontBold,
        color:'#555',
        fontSize: 25,
      },
      category:{
        paddingTop: 6,
        fontFamily: Global.fourthFont,
        fontSize:12,
      },
  listHolder :{
    flexDirection: 'row',
  },
  iconHolder: {
    flex:1,
  },
  textHolder : {
    flex:12,
    justifyContent:'flex-start',

  },
  placetimeHolder:{
    backgroundColor: 'white',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight:20,
    paddingBottom: 10,
    marginBottom: 2,
  },
  details:{
    fontFamily: Global.secondFont,
    color:Global.mainColor,
    fontSize:20,
    paddingBottom: 10,
    textDecorationLine: 'underline',
  },
      opening: {
        paddingTop: 5,
        fontFamily: Global.secondFont,
        fontSize: 17,
        paddingLeft: 5,
        paddingBottom: 10,
      },
      place: {
        fontFamily: Global.secondFont,
        fontSize: 17,
        paddingLeft: 5,
      },
  ratingHolder:{
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 20,
    marginBottom: 2,
  },
      starview:{
        paddingBottom: 10,
        marginRight: 190,
      },
  lieu:{
    fontFamily: Global.secondFont,
    color:Global.mainColor,
    fontSize:20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 20,
    textDecorationLine: 'underline',
    backgroundColor: 'white',
  },
});

export default InfoProduct;
