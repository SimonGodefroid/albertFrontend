import React from 'react';
import {
    StyleSheet,
    Image,
    Dimensions,
    View,
} from 'react-native';
import Global from '../../Global';
import Fav from '../core/Fav';

const styles = StyleSheet.create({
  image:{
    width: (Dimensions.get('window').width),
    height: (Dimensions.get('window').height)*0.32,
  },
  starview:{
    position:'absolute',
    top: 10,
    right: 10,
  }
});

class ImagesProduct extends React.Component {
  render() {
    console.log('image component', this.props);
    console.log('images Id', this.props.idEvent);
    return(
      <View>
        <Image
          source={{ uri: this.props.image }}
          style={styles.image}/>
        <View style={styles.starview}>
          <Fav
            idEvent={this.props.idEvent}/>
        </View>
      </View>
    );
  }

}

export default ImagesProduct;
