import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Global from '../../../Global';

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
    console.log('info component', this.props);
    const {
      title,
      category,
      place,
      description,
      address,
      city,
      code,
      date,
      hourStart,
      hourEnd,
      price,
      tags
    } = this.props;

    var month = null;
    switch (this.props.month) {
      case '01' :
        month = 'Janvier';
        break;
      case '02' :
        month = 'Février';
        break;
      case '03' :
        month = 'Mars';
        break;
      case '04' :
        month = 'Avril';
        break;
      case '05' :
        month = 'Mai';
        break;
      case '06' :
        month = 'Juin';
        break;
      case '07' :
        month = 'Juillet';
        break;
      case '08' :
        month = 'Aout';
        break;
      case '09' :
        month = 'Septembre';
        break;
      case '10' :
        month = 'Octobre';
        break;
      case '11' :
        month = 'Novembre';
        break;
      case '12' :
        month = 'Décembre';
        break;
      default :
        break;
    }

    return(
      <View>
        <View style={styles.eventPresentation}>
          <View style={styles.dateHolder}>
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.month}>{month}</Text>
          </View>
          <View style={styles.infosHolder}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.category}>{category}</Text>
          </View>
        </View>
        <View style={styles.placetimeHolder}>
          <Text style={styles.details}>Infos</Text>
          <View style={styles.listHolder}><View style={styles.iconHolder}><Icon name={'ios-time-outline'} size={24} style={{color:Global.mainColor}}/></View><View style={styles.textHolder}><Text style={styles.hours}>{hourStart} - {hourEnd}</Text></View></View>
          <View style={styles.listHolder}><View style={styles.iconHolder}><Icon name={'ios-pin-outline'} size={26} style={{color:Global.mainColor, paddingLeft:3,}}/></View><View style={styles.textHolder}><Text style={styles.place}>{place}</Text></View></View>
          <Text style={styles.placeSuite}>{address} - {city}</Text>
          <View style={styles.listHolder}><View style={styles.iconHolder}><Icon name={'ios-cash-outline'} size={24} style={{color:Global.mainColor}}/></View><View style={styles.textHolder}><Text style={styles.price}>{(price === null ? "Prix indisponible" : price)}</Text></View></View>
        </View>
        <View style={styles.descriptionHolder}>
          <Text style={styles.details}>Détails</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.tagsHolder}>
        <Text style={styles.tags}>#{tags[0]} #{tags[1]}</Text>
        </View>
        <Text style={styles.lieu}>A propos du lieu</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  eventPresentation:{
    backgroundColor: 'white',
    flexDirection: 'row',
    marginBottom: 2,
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
      dateHolder:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding:6,
      },
          date: {
            fontFamily: Global.secondFontBold,
            fontSize: 35,
            textAlign:'center',
            color:Global.thirdColor,
          },
          month :{
            fontFamily: Global.secondFont,
            fontSize: 16,
            textAlign:'center',
            color:Global.thirdColor,
          },
      infosHolder:{
        paddingTop: 30,
        paddingRight: 5,
        paddingLeft: 15,
        paddingBottom: 30,
        flex: 3,
      },
          title:{
            fontFamily: Global.secondFontBold,
            color:'#555',
            fontSize: 25,
          },
          category:{
            paddingTop: 4,
            fontFamily: Global.fourthFont,
            color:Global.fifthColor,
            fontSize:12,
          },
  placetimeHolder:{
    backgroundColor: 'white',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight:20,
    paddingBottom: 20,
    marginBottom: 2,
  },
  details:{
    fontFamily: Global.secondFont,
    color:Global.mainColor,
    fontSize:20,
    paddingBottom: 10,
    textDecorationLine: 'underline',
  },
      hours: {
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
        paddingBottom: 5,
      },
      placeSuite: {
        fontFamily: Global.secondFont,
        fontSize: 14,
        paddingLeft: 32,
        paddingBottom: 10,
      },
      price: {
        fontFamily: Global.secondFont,
        fontSize: 16,
        paddingLeft: 5,
      },
  descriptionHolder:{
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 15,
    marginBottom: 2,
  },
      description:{
        fontFamily: Global.secondFont,
        fontSize: 15,
        textAlign: 'justify',
        paddingBottom: 10,
      },
      tagsHolder :{
        backgroundColor:'rgb(241, 241, 241)',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft: 20,
        marginBottom:2,
      },
        tags:{
          fontFamily: Global.secondFont,
          fontSize: 15,
          color:Global.thirdColor,
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
