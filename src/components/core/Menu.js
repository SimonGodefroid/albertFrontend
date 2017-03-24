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

export default class Menu extends React.Component {
  render() {
    return(
      <View style={styles.modalHolder}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.close} onPress={this.props.onCloseFn}>
            <Icon name={'ios-close'} size={60} color={Global.secondColor}/>
        </TouchableOpacity>
        <Text style={styles.titleSection}>Faites une recherche <Icon name={'ios-search'} size={25}/></Text>
        <TouchableOpacity>
            <Text style={styles.menuEntries}><Icon name={'ios-restaurant-outline'} size={20}/> Manger</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.menuEntries}><Icon name={'ios-beer-outline'} size={20}/> Boire</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.menuEntries}><Icon name={'ios-walk-outline'} size={20}/> Bouger</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.menuEntries}><Icon name={'ios-musical-notes-outline'} size={20}/> Ecouter</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.menuEntries}><Icon name={'ios-eye-outline'} size={20}/> Découvrir</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.menuEntries}><Icon name={'ios-basket-outline'} size={20}/> Acheter</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.menuEntries}><Icon name={'ios-bicycle-outline'} size={20}/> Se détendre</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.menuEntries}><Icon name={'ios-clipboard-outline'} size={20}/> Travailler</Text>
        </TouchableOpacity>
        <View style={styles.separator}></View>
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
        backgroundColor: Global.mainColor,
        width:'95%',
        height: '90%',
        paddingLeft:20,
        paddingTop:5,
        paddingRight:20,
        paddingBottom: 15,
        elevation:10,
        alignItems:'flex-start',
    },
    close: {
      alignSelf: 'flex-end',
    },
    titleSection: {
        fontSize: 26,
        fontFamily: Global.FifthFont,
        color: Global.secondColor
    },
    menuEntries: {
        fontSize: 16,
        paddingBottom: 5,
        marginTop: 5,
        marginBottom: 5,
        fontFamily: Global.secondFont,
        color: Global.secondColor,
        borderBottomColor: '#fff',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    separator: {
        width: 100,
        backgroundColor: Global.secondColor,
        height: 3,
        marginTop:10,
        marginBottom:10,
    }
});
