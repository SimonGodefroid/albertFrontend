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
import Menu from './Menu';
import Filter from './Filter';
import * as Animatable from 'react-native-animatable';

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
            menuVisible: false,
            filterVisible: false,
        }
        this.goToSearch = this.goToSearch.bind(this);
        this.setMenuVisible = this.setMenuVisible.bind(this);
        this.onCloseMenuFn = this.onCloseMenuFn.bind(this);
        this.onCloseFilterFn = this.onCloseFilterFn.bind(this);
        this.setFilterVisible = this.setFilterVisible.bind(this);
        this.renderFilter = this.renderFilter.bind(this);
    }
    /* Gestion de la modal Menu */
    setMenuVisible(visible) {
        this.setState({menuVisible: visible});
    }
    onCloseMenuFn(close) {
      this.setState({
        menuVisible: false,
      });
    }

    /* Gestion du bouton Albert-search*/
    goToSearch() {
        Actions.search({})
    }

    /* Gestion de la modal Filter */
    setFilterVisible(visible) {
        this.setState({filterVisible: visible});
    }
    onCloseFilterFn(close) {
      this.setState({
        filterVisible: false,
      });
    }

    renderFilter() {
      if (this.props.filter === true) {
        return (
          <View>
          <Modal animationType={"slide"} transparent={true} visible={this.state.filterVisible} onRequestClose={() => { }}>
              <Filter cat={this.props.cat} onCloseFn={this.onCloseFilterFn}  />
          </Modal>
        <TouchableOpacity onPress={() => { this.setFilterVisible(true) }}>
            <Icon name={'ios-options-outline'} size={40} color={'#fff'}/>
        </TouchableOpacity>
      </View>
        );
      } else {
        return(
              <Icon name={'ios-options-outline'} size={40} color={'#619B91'}/>
        );
      }
    }


    render() {
        return (
            <View style={styles.tabContainer}>
                <View style={styles.bottomColor}/>
                  <Modal animationType={"slide"} transparent={true} visible={this.state.menuVisible} onRequestClose={() => { }}>
                      <Menu onCloseFn={this.onCloseMenuFn} />
                  </Modal>
                <TouchableOpacity onPress={() => { this.setMenuVisible(true) }}>
                    <Icon name={'ios-menu'} size={40} color={'#fff'}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goToSearch}>
                    <Animatable.Image animation="bounceIn" delay={100}  source={require('../../../assets/img/logo.png')} style={styles.albert}/>
                </TouchableOpacity>
                 {this.renderFilter()}
            </View>

        );
    }
}
