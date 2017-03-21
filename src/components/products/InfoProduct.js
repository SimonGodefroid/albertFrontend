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
import Global from '../../Global';

class InfoProduct extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View>
        <Text>Titre produit</Text>
        <Text>Description produit</Text>
        <Text>Date produit</Text>
        <Text>Adresse produit</Text>
        <Text>Horaires produit</Text>
        <Text>Tarif produit euros</Text>
        <Text>Tags produit</Text>
      </View>
    );
  }

};


const styles = StyleSheet.create({

});

export default InfoProduct;
