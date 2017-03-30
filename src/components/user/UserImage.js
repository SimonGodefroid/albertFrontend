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


class UserImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={{paddingTop:20}}>
        <Image
          style={[{width: 50, height: 50},this.props.style]}
          source={{uri: this.props.image}}
        />
      </View>
    );
  }

}

UserImage.defaultProps = {
  image: 'http://formation.reactnative.fr/img/avatar/farid.jpg'
};




const styles = StyleSheet.create({

});

export default UserImage;
