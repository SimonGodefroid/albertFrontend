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

export default class Fav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Icon name={'ios-star-outline'} size={35} color={Global.thirdColor} />
    );
  }
}
