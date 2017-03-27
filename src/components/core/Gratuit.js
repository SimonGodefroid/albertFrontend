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
    Switch,
} from 'react-native';
import Global from '../../Global';

class Gratuit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trueSwitchIsOn: true,
         falseSwitchIsOn: false,
  };
  }

  render() {
    return(
      <View style={styles.gratuit}>
          <Switch
          onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
          value={this.state.trueSwitchIsOn} onTintColor={Global.thirdColor} thumbTintColor={Global.secondColor}/>
          <Text style={styles.title}>Payant</Text>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  title : {
    color:Global.secondColor,
    fontSize:12,
    textAlign:'center',
  },
});

export default Gratuit;
