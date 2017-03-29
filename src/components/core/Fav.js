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
import Icon from 'react-native-vector-icons/Ionicons';

class Fav extends React.Component {
  render() {
    return(
      <TouchableOpacity>
        <Icon name={'ios-star-outline'} size={35} color={Global.thirdColor} />
      </TouchableOpacity>
    );
  }
}

export default Fav;
