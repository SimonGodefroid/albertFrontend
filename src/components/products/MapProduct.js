import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';


let {
  height,
  width,
} = Dimensions.get('window');

import Map from 'react-native-maps';

class MapProduct extends React.Component {
  render() {
    return (
      <View>
        <Map
          style={{
            width: width,
            height: 200,
            marginBottom: 10,
          }}
          initialRegion={{
            latitude: this.props.latitude,
            longitude: this.props.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}>
        <Map.Marker
          title={this.props.address}
          coordinate={{
            latitude: this.props.latitude,
            longitude: this.props.longitude,
          }} />
      </Map>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default MapProduct;
