import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    ScrollView,
    ActivityIndicator,
    ListView,
    TouchableOpacity
} from 'react-native';
import Global from '../Global';
import Icon from 'react-native-vector-icons/Ionicons';

class MenuScene extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                <Icon name={'ios-close'} size={50} color={'#fff'}/>
                </TouchableOpacity>
                <Text style={styles.titleSection}>Faites une recherche <Icon name={'ios-search'} size={25}/></Text>
                <TouchableOpacity>
                    <Text style={styles.menuEntries}>Manger</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.menuEntries}>Boire</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.menuEntries}>Bouger</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.menuEntries}>Ecouter</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.menuEntries}>Découvrir</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.menuEntries}>Acheter</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.menuEntries}>Se détendre</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.menuEntries}>Travailler</Text>
                </TouchableOpacity>
                <View style={styles.separator}></View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Global.mainColor,
        flex: 1,
        paddingLeft: 25,
        paddingTop: 50,
        paddingRight: 25,
        alignItems: 'flex-start'
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
        width: 160,
        backgroundColor: Global.secondColor,
        height: 4,
        marginTop:10,
        marginBottom:10,
    }
});

export default MenuScene;
