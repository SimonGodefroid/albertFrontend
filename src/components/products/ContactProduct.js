import React from 'react';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

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
        <Text>{reservation}</Text>
        <Text>{mail}</Text>
        <Text>{phone}</Text>
        <Text>{webSite}</Text>
        <Text>{facebook}</Text>
        <Text>{twitter}</Text>
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
