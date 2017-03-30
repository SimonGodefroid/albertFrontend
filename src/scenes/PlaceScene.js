import React from 'react';

import {
  StyleSheet,
  ScrollView,
  Image,
  Platform,
  Text,
  Dimensions,
  View,
} from 'react-native';

import {
  Actions,
} from 'react-native-router-flux';

import Config from '../Config';
import Images from '../components/core/Images';
import MapProduct from '../components/products/MapProduct';
import InfoPlace from '../components/products/Places/InfoPlace';
import AlbertTab from '../components/core/AlbertTab';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    width: null,
  },
  image:{
    width: (Dimensions.get('window').width),
    height: (Dimensions.get('window').height)*0.32,
  },
});

class PlaceScene extends React.Component {
  render() {
    const {
      vicinity,
      geometry,
      name,
      rating,
      types,
    } = this.props.product;

    const opening_hours = this.props.product.opening_hours || [] ;
    let opening = "";
    if (opening_hours.length === 0) {
      opening = "Horaires d'ouverture non renseignés";
    } else {
      if (opening_hours.open_now) {
        opening = "ouvert"
      } else {
        opening = "fermé"
      }
    }

    const photos = this.props.product.photos || [] ;
    let photo = 0;
    if (photos.length === 0) {
      if (this.props.cat === 1) {
        photo = Images.searchManger
      }
      else if (this.props.cat === 2) {
        photo = Images.searchBoire
      }
      else if (this.props.cat === 3) {
        photo = Images.searchBouger
      }
      else if (this.props.cat === 4) {
        photo = Images.searchAcheter
      }
      else if (this.props.cat === 5) {
        photo = Images.searchDecouvrir
      }
      else if (this.props.cat === 6) {
        photo = Images.searchEcouter
      }
      else if (this.props.cat === 7) {
        photo = Images.searchSeDetendre
      }
      else if (this.props.cat === 8) {
        photo = Images.searchTravailler
      }
    } else {
      if (photos[0].photo_reference) {
        photo = {
          uri : `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photos[0].photo_reference}&key=${Config.apiKey}`
        }
      }
    }

    return(
      <View>
        <ScrollView style={{backgroundColor:'#E9EBEE', paddingTop: (Platform.OS === 'ios') ? 20 : 0}}>
          <Image
            style={styles.image}
            source={photo}/>
          <InfoPlace
            name={name}
            openingHours={opening}
            address={vicinity}
            rating={rating}
            category={types[0]}
            />
          <MapProduct
            address={vicinity}
            longitude={geometry.location.lng}
            latitude={geometry.location.lat}
            />
          <View style={{paddingBottom: 70}}>
          </View>
        </ScrollView>
        <View style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'transparent',
        }}>
          <AlbertTab
            filter={false}/>
        </View>
      </View>
    );
  }
}

export default PlaceScene;
