import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    Alert,
} from 'react-native';
import Communications from 'react-native-communications';

import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Foundation';

import Global from '../../Global';

class ContactProduct extends React.Component {

  render() {
    console.log('contact component', this.props);
    const {
      facebook,
      twitter,
      mail,
      webSite,
      reservation,
      phone,
    } = this.props;

    console.log(this.props.phone);
    return(
      <View style={styles.contactHolder}>
        <Text style={styles.details}>Contacts</Text>
        <View style={styles.socialHolder}>
          <TouchableOpacity onPress={() => (facebook !== null ? Communications.web(facebook) : Alert.alert("Compte Facebook non renseigné par l organisateur de cet événement"))}>
              <Icon name="logo-facebook" size={40} color="#355089"></Icon>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => (twitter !== null ? Communications.web(twitter) : Alert.alert("Compte Twitter non renseigné par l organisateur de cet événement"))}>
              <Icon name="logo-twitter" size={40} color="#1DA1F2"></Icon>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => (mail !== null ? Communications.email(mail,null,null,'My Subject','My body text') : Alert.alert("Email non renseigné par l organisateur de cet événement"))}>
              <Icon name="ios-mail" size={40} color="#E93E30"></Icon>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => (webSite !== null ? Communications.web(webSite) : Alert.alert("Site internet non renseigné par l organisateur de cet événement"))}>
              <Icon2 name="web" size={40} color="#BFBFBF"></Icon2>
          </TouchableOpacity>
        </View>
        <View style={styles.resaHolder}>
          <TouchableOpacity onPress={() => (reservation !== null ? Communications.web(reservation) : Alert.alert("L organisateur de cet événement n offre malheureusement pas la possibilité de réserver via notre application"))} style={styles.button}>
              <Icon2 name="checkbox-marked-circle-outline" size={20} color="white">
                <Text style={styles.text}>  Réserver</Text>
              </Icon2>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => (phone !== null ? Communications.phonecall(phone, true) : Alert.alert("Numéro de téléphone non renseigné par l organisateur de cet événement"))} style={styles.button}>
              <Icon3 name="telephone" size={20} color="white">
                <Text style={styles.text}>   Appeler</Text>
              </Icon3>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  contactHolder:{
    paddingTop: 10,
    paddingLeft: 20,
    paddingBottom: 20,
    backgroundColor: 'white',
  },
  details:{
    fontFamily: Global.secondFont,
    paddingBottom: 7,
    textDecorationLine: 'underline',
  },
  socialHolder:{
    flexDirection:'row',
    justifyContent: 'space-between',
    marginRight: 50,
    marginLeft: 30,

  },
  resaHolder:{
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: 50,
    marginLeft: 30,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
      button: {
          backgroundColor: '#59BDB2',
          height: 30,
          width: 140,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center'
      },
      text: {
          color: 'white',
          alignItems: 'center',
          fontFamily: Global.secondFontBold,
          fontSize: 20
      }
});

export default ContactProduct;
