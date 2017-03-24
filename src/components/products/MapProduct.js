import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

import Map from 'react-native-maps';

class MapProduct extends React.Component {
  render() {
    console.log(this.props.title);
    console.log(this.props.longitude);
    return (
      <View>
        <Map
          style={{
            width: (Dimensions.get('window').width),
            height: 200,
          }}
          initialRegion={{
            latitude: this.props.latitude,
            longitude: this.props.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}>
        <Map.Marker
          title={this.props.title}
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
