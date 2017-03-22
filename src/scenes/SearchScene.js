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

const widthimage = (Dimensions.get('window').width)/2*0.9;
const heightimage = (Dimensions.get('window').height)/4*0.75;

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
    width: widthimage,
    height: heightimage,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewCard:{
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 5,
    paddingRight: 5,
  },
  textView: {
    flex: 1,
    justifyContent: 'center',
  },
  text:{
    color: Global.secondColor,
    fontFamily: Global.secondFontBold,
    fontSize: 21,
    textAlign: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0, 0.35)',
    height: heightimage,
    width: widthimage,
  },
});

class SearchScene extends React.Component {
  render() {
    return(
      <ScrollView style={styles.scrollview}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => Actions.results({cat:1})}>
            <View style={styles.viewCard}>
              <Image
                style={styles.image}
                source={require('./../../assets/img/search-manger.jpg')}>
                  <View style={styles.overlay}>
                    <View style={styles.textView}>
                      <Text
                        style={styles.text}>
                        MANGER
                      </Text>
                    </View>
                  </View>
              </Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Actions.results({cat:2})}>
            <View style={styles.viewCard}>
              <Image
                style={styles.image}
                source={require('./../../assets/img/search-boire.jpg')}>
                  <View style={styles.overlay}>
                    <View style={styles.textView}>
                      <Text
                        style={styles.text}>
                        BOIRE
                      </Text>
                    </View>
                  </View>
              </Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Actions.results({cat:3})}>
            <View style={styles.viewCard}>
              <Image
                style={styles.image}
                source={require('./../../assets/img/search-bouger.jpg')}>
                  <View style={styles.overlay}>
                    <View style={styles.textView}>
                      <Text
                        style={styles.text}>
                        BOUGER
                      </Text>
                    </View>
                  </View>
              </Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Actions.results({cat:4})}>
            <View style={styles.viewCard}>
              <Image
                style={styles.image}
                source={require('./../../assets/img/search-ecouter.jpg')}>
                  <View style={styles.overlay}>
                    <View style={styles.textView}>
                      <Text
                        style={styles.text}>
                        ECOUTER
                      </Text>
                    </View>
                  </View>
              </Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Actions.results({cat:5})}>
            <View style={styles.viewCard}>
              <Image
                style={styles.image}
                source={require('./../../assets/img/search-decouvrir.jpg')}>
                  <View style={styles.overlay}>
                    <View style={styles.textView}>
                      <Text
                        style={styles.text}>
                        DECOUVRIR
                      </Text>
                    </View>
                  </View>
              </Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Actions.results({cat:6})}>
            <View style={styles.viewCard}>
              <Image
                style={styles.image}
                source={require('./../../assets/img/search-acheter.jpg')}>
                  <View style={styles.overlay}>
                    <View style={styles.textView}>
                      <Text
                        style={styles.text}>
                        ACHETER
                      </Text>
                    </View>
                  </View>
              </Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Actions.results()}>
            <View style={styles.viewCard}>
              <Image
                style={styles.image}
                source={require('./../../assets/img/search-se-detendre.jpg')}>
                  <View style={styles.overlay}>
                    <View style={styles.textView}>
                      <Text
                        style={styles.text}>
                        SE {'\n'} DETENDRE
                      </Text>
                    </View>
                  </View>
              </Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Actions.results()}>
            <View style={styles.viewCard}>
              <Image
                style={styles.image}
                source={require('./../../assets/img/search-travailler.jpg')}>
                  <View style={styles.overlay}>
                    <View style={styles.textView}>
                      <Text
                        style={styles.text}>
                        TRAVAILLER
                      </Text>
                    </View>
                  </View>
              </Image>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

}

export default SearchScene;
