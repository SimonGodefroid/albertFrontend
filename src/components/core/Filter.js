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
    Switch,
} from 'react-native';
import Global from '../../Global';
import Icon from 'react-native-vector-icons/Ionicons';
import Api from '../../Api';
export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      cat: this.props.cat,
      richUser: true,
    }
  }
  renderEventsFilter() {

  };
  renderPlacesFilter() {

  };

  render() {
    return(
      <View style={styles.modalHolder}>
          <View style={styles.container}>
            <View style={styles.section}>
              <Text style={styles.head}>Tu veux filtrer ta recherche ?</Text>
                <TouchableOpacity style={styles.close} onPress={this.props.onCloseFn}>
                    <Icon name={'ios-close-circle-outline'} size={45} color={Global.mainColor}/>
                </TouchableOpacity>
              </View>
              <Text style={styles.sectionTitle}>Plutôt fauché ou blindé ?</Text>
              <View style={styles.section}>
                  <View style={styles.itemAlbert}>
                    <Image source={this.state.richUser === true ? require('../../../assets/img/albert-fauche-nb.png') : require('../../../assets/img/albert-fauche.png')} style={styles.albert1}/>
                  </View>
                  <View style={styles.itemGratuit}>
                    <Switch
                    onValueChange={(value) => this.setState({richUser: value})}
                    value={this.state.richUser} onTintColor={Global.mainColor} thumbTintColor={Global.secondColor} />
                  </View>
                  <View style={styles.itemAlbert}>
                    <Image source={this.state.richUser === true ? require('../../../assets/img/albert-blinde.png') : require('../../../assets/img/albert-blinde-nb.png')} style={styles.albert2}/>
                  </View>
              </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    modalHolder: {
        flex:1,
        backgroundColor:'rgba(0, 0, 0, 0.3)',
        padding:20,
    },
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        flex:1,
        paddingLeft:20,
        paddingTop:5,
        paddingRight:20,
        paddingBottom: 15,
        elevation:6,

    },
    close: {
        alignSelf: 'flex-end',
        marginLeft:15,
    },
    head :{
      color:Global.mainColor,
      fontFamily:Global.secondFont,
      fontSize:20,
    },
    section:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:8,
        marginBottom:8,
    },
    sectionTitle :{
        fontSize:18,
        textAlign:'center',
        fontFamily:Global.mainFontBold,
    },
    albert1 :{
      width:80,
      height:80,
    },
    albert2 :{
      width:80,
      height:80,
    },
    itemAlbert:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    itemGratuit:{
      flex:2,
      alignItems:'center',
      justifyContent:'center',
    }
});
