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
    return (
      <View>
        <Map
          style={styles.mapview}
          initialRegion={{
            latitude: this.props.latitude,
            longitude: this.props.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          cacheEnabled={true}>
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
  mapview:{
    width: (Dimensions.get('window').width),
    height: (Dimensions.get('window').height)*0.33,
  },
});

export default MapProduct;
