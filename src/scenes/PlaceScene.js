import React from 'react';

import {
  StyleSheet,
  ScrollView,
  Image,
  Platform,
  Text,
} from 'react-native';

import {
  Actions,
} from 'react-native-router-flux';

import ImagesProduct from '../components/products/ImagesProduct';
import MapProduct from '../components/products/MapProduct';
import Favorites from '../components/user/Favorites';
import InfoPlace from '../components/products/Places/InfoPlace';
import ContactPlace from '../components/products/Places/ContactPlace';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    width: null,
  },
});

class PlaceScene extends React.Component {
  render() {
    const {
      vicinity,
      geometry,
      name,
      opening_hours,
      rating,
      types,
    } = this.props.product;

    console.log(this.props.product);
    return(
      <ScrollView style={{backgroundColor:'#E9EBEE', paddingTop: (Platform.OS === 'ios') ? 20 : 0,
        }}>
        <MapProduct
          address={vicinity}
          longitude={geometry.location.lng}
          latitude={geometry.location.lat}
          />
        <InfoPlace
          name={name}
          openingHours={opening_hours.open_now === false ? "fermé" : "ouvert"}
          address={vicinity}
          rating={rating}
          category={types[0]}
          />
      </ScrollView>
    );
  }
}

export default PlaceScene;
