import React from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

import Global from '../../Global';


class Button extends React.Component {
  render() {
    return(
      <TouchableOpacity
        style={styles.container}>
        <Text
          style={styles.text}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    backgroundColor: '#008489',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontFamily: Global.mainFont,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default Button;
