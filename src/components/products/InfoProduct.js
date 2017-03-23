import React from 'react';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Global from '../../Global';

class InfoProduct extends React.Component {

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
            <Text style={styles.date}>{date} {month}</Text>
          </View>
          <View style={styles.infosHolder}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.category}>{category}</Text>
          </View>
        </View>
        <View style={styles.placetimeHolder}>
          <Text style={styles.details}>Infos</Text>
          <Text style={styles.hours}><Icon name={'ios-time-outline'} size={20}/>  {hourStart} - {hourEnd}</Text>
          <Text style={styles.place}>
            <Icon name={'ios-pin-outline'} size={24}/>   {place}
          </Text>
          <Text style={styles.placeSuite}>{address} - {city}</Text>
          <Text style={styles.price}><Icon name={'ios-mi-euro-symbol'} size={20}/>{price}</Text>
        </View>
        <View style={styles.descriptionHolder}>
          <Text style={styles.details}>Détails</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  eventPresentation:{
    // backgroundColor: 'yellow',
    flexDirection: 'row',
  },
      dateHolder:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 2,
      },
          date: {
            fontFamily: Global.secondFontBold,
            fontSize: 23,
          },
      infosHolder:{
        paddingTop: 10,
        paddingRight: 5,
        paddingLeft: 15,
        paddingBottom: 15,
        flex: 4,
      },
          title:{
            fontFamily: Global.secondFontBold,
            fontSize: 25,
          },
          category:{
            paddingTop: 10,
            fontFamily: Global.secondFont,
          },
  placetimeHolder:{
    // backgroundColor: Global.fourthColor,
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 15,
  },
  details:{
    fontFamily: Global.secondFont,
    paddingBottom: 7,
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
      },
      price: {

      },
  descriptionHolder:{
    // backgroundColor: Global.thirdColor,
    paddingLeft: 20,
    paddingTop: 10,
    paddingRight: 10,
  },
      description:{
        fontFamily: Global.secondFont,
        fontSize: 15,
        textAlign: 'justify',
      },
});

export default InfoProduct;
