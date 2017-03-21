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
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';
import ImagesProduct from '../components/products/ImagesProduct';
import InfoProduct from '../components/products/InfoProduct';
import Favorites from '../components/user/Favorites';

class ProductScene extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View>
        <Text>Page produit</Text>
      </View>
    );
  }

}


const styles = StyleSheet.create({

});

export default ProductScene;
