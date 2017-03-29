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
      <View
        style={[styles.container, {backgroundColor: this.props.color, borderWidth:this.props.borderWidth, borderColor:this.props.borderColor,}] }>
        <Text
          style={[styles.text, {fontSize:this.props.size}]}>
          {this.props.text}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
  },
  text: {
    color: '#fff',
    textAlign:'center',
    fontFamily: Global.mainFont,
    paddingTop:8,
    paddingBottom:9,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Button;
