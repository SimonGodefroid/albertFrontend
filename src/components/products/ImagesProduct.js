import React from 'react';
import {
    StyleSheet,
    Image,
    Dimensions,
} from 'react-native';
import Global from '../../Global';

const styles = StyleSheet.create({
  image:{
    width: (Dimensions.get('window').width),
    height: (Dimensions.get('window').height)*0.38,
  },
});

class ImagesProduct extends React.Component {

  render() {
    console.log('image component', this.props);
    return(
      <Image
        source={{ uri: this.props.image }}
        style={styles.image}/>
    );
  }

}

export default ImagesProduct;
