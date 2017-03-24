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
  image: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAxsAAAAJDIwODUzYzk5LTA2MGItNDE0ZS04YTFkLWU0OTA3NWJiYjk4Zg.jpg'
};




const styles = StyleSheet.create({

});

export default UserImage;