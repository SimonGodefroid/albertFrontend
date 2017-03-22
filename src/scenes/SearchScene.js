import React from 'react';

import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {
  Actions,
} from 'react-native-router-flux';

import Global from '../Global';
import Button from '../components/core/Button';

const PADDING = 10;

const styles = StyleSheet.create({
  scrollview:{
    backgroundColor: Global.secondColor,
    flex: 1,
  },
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop:10,
  },
  image:{
    width: (Dimensions.get('window').width)/2*(0.9),
    height: (Dimensions.get('window').width)/4*(1.2),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.9,
  },
  viewCard:{
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 5,
    paddingRight: 5,
  },
  text:{
    color: Global.secondColor,
    fontFamily: Global.secondFontBold,
    fontSize: 21,
  },
});

class SearchScene extends React.Component {
  render() {
    return(
      <ScrollView style={styles.scrollview}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => Actions.results()}>
            <View style={styles.viewCard}>
              <Image
                style={styles.image}
                source={require('./../../assets/img/search-manger.jpg')}>
                  <Text
                    style={styles.text}>
                    MANGER
                  </Text>
              </Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Actions.results()}>
            <View style={styles.viewCard}>
              <Image
                style={styles.image}
                source={require('./../../assets/img/search-boire.jpg')}>
                <Text
                  style={styles.text}>
                  BOIRE
                </Text>
              </Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Actions.results()}>
            <View style={styles.viewCard}>
              <Image
                style={styles.image}
                source={require('./../../assets/img/search-bouger.jpg')}>
                <Text
                  style={styles.text}>
                  BOUGER
                </Text>
            </Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Actions.results()}>
            <View style={styles.viewCard}>
              <Image
                style={styles.image}
                source={require('./../../assets/img/search-ecouter.jpg')}>
                <Text
                  style={styles.text}>
                  ECOUTER
                </Text>
            </Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Actions.results()}>
            <View style={styles.viewCard}>
              <Image
                style={styles.image}
                source={require('./../../assets/img/search-decouvrir.jpg')}>
                <Text
                  style={styles.text}>
                  DECOUVRIR
                </Text>
            </Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Actions.results()}>
            <View style={styles.viewCard}>
              <Image
                style={styles.image}
                source={require('./../../assets/img/search-acheter.jpg')}>
                <Text
                  style={styles.text}>
                  ACHETER
                </Text>
            </Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Actions.results()}>
            <View style={styles.viewCard}>
              <Image
                style={styles.image}
                source={require('./../../assets/img/search-se-detendre.jpg')}>
                <Text
                  style={styles.text}>
                  SE DETENDRE
                </Text>
            </Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Actions.results()}>
            <View style={styles.viewCard}>
              <Image
                style={styles.image}
                source={require('./../../assets/img/search-travailler.jpg')}>
                <Text
                  style={styles.text}>
                  TRAVAILLER
                </Text>
            </Image>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

}

export default SearchScene;
