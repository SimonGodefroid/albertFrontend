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
    Modal,
} from 'react-native';
import Global from '../../Global';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Filter extends React.Component {
  render() {
    return(
      <View style={styles.modalHolder}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.close} onPress={this.props.onCloseFn}>
            <Icon name={'ios-close'} size={60} color={Global.mainColor}/>
        </TouchableOpacity>
        <Text>Salut</Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    modalHolder: {
      flex:1,
      backgroundColor:'rgba(0, 0, 0, 0.3)',
      justifyContent: 'center',
      alignItems: 'center',
      padding:15,
    },
    container: {
        backgroundColor: Global.secondColor,
        width:'95%',
        height: '90%',
        paddingLeft:20,
        paddingTop:5,
        paddingRight:20,
        paddingBottom: 15,
        elevation:10,
    },
    close: {
      alignSelf: 'flex-end',
    }
});
