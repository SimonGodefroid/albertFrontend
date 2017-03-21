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
  Alert,
} from 'react-native';

import {
  Actions,
} from 'react-native-router-flux';

import Global from '../Global';
import Button from '../components/core/Button';

class SearchScene extends React.Component {
  render() {
    return(
      <View style={{marginTop: 100}}>
        <Text>
          Je suis un beauf
        </Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({

});

export default SearchScene;
