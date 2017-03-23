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
import Global from '../../Global';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
    tabContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        position: 'relative',
        height: 80,
        paddingBottom: 10,
    },
    albertHolder: {
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    bottomColor: {
        position: 'absolute',
        backgroundColor: Global.mainColor,
        height: 60,
        left: 0,
        width: '100%'
    },
    albert: {
        width: 70,
        height: 70
    }
});


export default class AlbertTab extends React.Component {
    constructor(props) {
      super(props);
      this.goToSearch = this.goToSearch.bind(this);
    }

    goToSearch() {
      Actions.search({})
    }

    render() {
        return (
            <View style={styles.tabContainer}>
                <View style={styles.bottomColor}/>
                <Icon name={'ios-menu'} size={40} color={'#fff'}/>
                <TouchableOpacity onPress={this.goToSearch}>
                  <Image source={require('../../../assets/img/logo.png')} style={styles.albert}/>
                </TouchableOpacity>
                <Icon name={'ios-options-outline'} size={40} color={'#fff'}/>
            </View>

        );
    }
}
