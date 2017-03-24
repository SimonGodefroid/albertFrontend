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
    Modal
} from 'react-native';
import Global from '../../Global';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import Filter from './Filter';

const styles = StyleSheet.create({
    tabContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        position: 'relative',
        height: 80,
        paddingBottom: 10
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
        this.state = {
            modalVisible: false
        }
        this.goToSearch = this.goToSearch.bind(this);
        this.goToMenu = this.goToMenu.bind(this);
        this.setModalVisible = this.setModalVisible.bind(this);
        this.onCloseFn = this.onCloseFn.bind(this);
    }

    goToSearch() {
        Actions.search({})
    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    goToMenu() {
        Actions.menu({})
    }
    onCloseFn(close) {
      this.setState({
        modalVisible: false,
      });
    }

    render() {
        return (
            <View style={styles.tabContainer}>
                <View style={styles.bottomColor}/>
                <TouchableOpacity onPress={this.goToMenu}>
                    <Icon name={'ios-menu'} size={40} color={'#fff'}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goToSearch}>
                    <Image source={require('../../../assets/img/logo.png')} style={styles.albert}/>
                </TouchableOpacity>
                <Modal animationType={"slide"} transparent={true} visible={this.state.modalVisible} onRequestClose={() => { }}>
                    <Filter onCloseFn={this.onCloseFn} />
                </Modal>
                <TouchableOpacity onPress={() => { this.setModalVisible(true) }}>
                    <Icon name={'ios-options-outline'} size={40} color={'#fff'}/>
                </TouchableOpacity>
            </View>

        );
    }
}
