import React from 'react';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Global from '../../Global';

const styles = StyleSheet.create({
  eventsPresentation:{
    backgroundColor: Global.mainColor,
    flex:1,
  },
  eventsPresentationLeft:{

  },
  eventsPresentationRight:{

  },
  title:{
    paddingLeft: 10,
    paddingRight: 100,
    paddingTop: 15,
    fontFamily: Global.secondFontBold,
    fontSize: 22,
  },
  category:{
    paddingLeft: 10,
    paddingTop: 5,
    fontFamily: Global.secondFont,
  },
  place: {
    paddingTop: 5,
    paddingBottom: 5,
    fontFamily: Global.secondFont,
    paddingLeft: 12,
    fontSize: 12,
  },
  placeSuite: {
    fontFamily: Global.secondFont,
    paddingLeft: 28,
    paddingBottom: 10,
    fontSize: 12,
  },
  description:{
    paddingLeft: 10,
    paddingRight: 130,
    fontFamily: Global.mainFontLight,
  },
});

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
    } = this.props;

    return(
      <View>
        <View style={styles.eventspresentation}>
          <View style={styles.eventsPresentationLeft}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.category}>{category}</Text>
            <Text style={styles.place}>
              <Icon name={'ios-pin-outline'} size={20}/> {place}
            </Text>
            <Text style={styles.placeSuite}>{address} - {city}</Text>
          </View>
          <View style={styles.eventsPresentationRight}>
          </View>
        </View>
        <View>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>

    );
  }

};

export default InfoProduct;
