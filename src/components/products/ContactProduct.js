import React from 'react';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

import Global from '../../Global';

class ContactProduct extends React.Component {

  render() {
    console.log('contact component', this.props);
    const {
      reservation,
      mail,
      phone,
      webSite,
      facebook,
      twitter
    } = this.props;

    return(
      <View style={styles.contactHolder}>
        <Text style={styles.details}>Contacts</Text>
        <View>
          <Text>{reservation}</Text>
          <Text>{phone}</Text>
        </View>
        <View>
          <Icon name="logo-facebook"></Icon><Text>{facebook}</Text>
          <Icon name="logo-twitter"></Icon><Text>{twitter}</Text>
          <Icon name="ios-mail"></Icon><Text>{mail}</Text>
          <Icon2 name="web"></Icon2><Text>{webSite}</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  contactHolder:{
    backgroundColor: 'pink',
    paddingTop: 10,
    paddingLeft: 20,
    paddingBottom: 15,
  },
  details:{
    fontFamily: Global.secondFont,
    paddingBottom: 7,
    textDecorationLine: 'underline',
  },
});

export default ContactProduct;
