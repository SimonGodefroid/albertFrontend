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
  Dimensions,
} from 'react-native';

import {
  Actions,
} from 'react-native-router-flux';

import events from '../../albert.events.json'
import ImagesProduct from '../components/products/ImagesProduct';
import InfoProduct from '../components/products/InfoProduct';
import Favorites from '../components/user/Favorites';

const styles = StyleSheet.create({
  image:{
    width: (Dimensions.get('window').width),
    height: (Dimensions.get('window').height),
  },
});

class ProductScene extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ScrollView>
        <Image
          style={styles.image}
          source={require('./../../assets/img/search-bouger.jpg')}/>
      </ScrollView>
    );
  }

}

export default ProductScene;
