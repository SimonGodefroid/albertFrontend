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
    Slider
} from 'react-native';
import Global from '../../Global';
import Icon from 'react-native-vector-icons/Ionicons';
import Api from '../../Api';
import Button from './Button';
import * as Animatable from 'react-native-animatable';

export default class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cat: props.cat,
            paidEvents: props.isPaidEvents,
            currentEvents: true,
            todayEvents: true,
            futureEvents: true
        }
        this.renderCurrentEvents = this.renderCurrentEvents.bind(this);
        this.renderTodayEvents = this.renderTodayEvents.bind(this);
        this.renderFutureEvents = this.renderFutureEvents.bind(this);
    }

    renderEventsFilter() {}
    renderPlacesFilter() {}
    renderCurrentEvents() {
        if (this.state.currentEvents === true) {
            this.setState({currentEvents: false, todayEvents:true, futureEvents:true,})
            this.props.onCloseFn();
        } else {
            this.setState({currentEvents: true,})
        }
    }
    renderTodayEvents() {
      if (this.state.todayEvents === true) {
          this.setState({todayEvents: false, currentEvents:true, futureEvents:true,})
          this.props.onCloseFn();
      } else {
          this.setState({todayEvents: true})
      }
    }

    renderFutureEvents() {
      if (this.state.futureEvents === true) {
          this.setState({futureEvents: false, currentEvents:true, todayEvents:true})
          this.props.onCloseFn();
      } else {
          this.setState({futureEvents: true})
      }
    }
    render() {
        return (
            <View style={styles.modalHolder}>
                <View style={styles.container}>
                    <View style={styles.section}>
                        <Text style={styles.head}>Tu veux filtrer ta recherche ?</Text>
                        <TouchableOpacity style={styles.close} onPress={() => this.props.onCloseFn(this.state.paidEvents)}>
                            <Icon name={'ios-close-circle-outline'} size={45} color={Global.mainColor}/>
                        </TouchableOpacity>
                    </View>
                    <Animatable.Text animation="fadeInUp" delay={100}style={styles.sectionTitle}>Plutôt fauché ou blindé ?</Animatable.Text>
                    <View style={styles.section}>
                        <Animatable.View animation="bounceIn" delay={300} style={styles.itemAlbert}>
                            <Animatable.Image source={this.state.paidEvents === true ? require('../../../assets/img/albert-fauche-nb.png') : require('../../../assets/img/albert-fauche.png')} style={styles.albert1}/>
                        </Animatable.View>
                        <View style={styles.itemGratuit}>
                            <Switch
                              onValueChange={(value) => {
                                this.setState({paidEvents: value});

                              }}
                              value={this.state.paidEvents}
                              onTintColor={Global.mainColor}
                              thumbTintColor={Global.secondColor}/>
                        </View>
                        <Animatable.View animation="bounceIn" delay={300} style={styles.itemAlbert}>
                            <Image source={this.state.paidEvents === true ? require('../../../assets/img/albert-blinde.png') : require('../../../assets/img/albert-blinde-nb.png')} style={styles.albert2}/>
                        </Animatable.View>
                    </View>
                    <Animatable.Text animation="fadeInUp" delay={500} style={styles.sectionTitle}>Quand ?</Animatable.Text>
                    <View style={styles.section}>
                        <Animatable.View animation="fadeIn" delay={600} style={{flex: 1,padding: 5}}>
                            <TouchableOpacity style={this.state.currentEvents ? styles.buttonPress : styles.button} onPress={this.renderCurrentEvents}>
                                <Text style={this.state.currentEvents ? styles.timeTextPress : styles.timeText}>À l'affiche</Text>
                            </TouchableOpacity>
                        </Animatable.View>
                        <Animatable.View animation="fadeIn" delay={600} style={{flex: 1,padding: 5}}>
                            <TouchableOpacity style={this.state.todayEvents ? styles.buttonPress : styles.button} onPress={this.renderTodayEvents}>
                                <Text style={this.state.todayEvents ? styles.timeTextPress : styles.timeText}>Ce jour</Text>
                            </TouchableOpacity>
                        </Animatable.View>
                        <Animatable.View animation="fadeIn" delay={600} style={{flex: 1,padding: 5}}>
                            <TouchableOpacity style={this.state.futureEvents ? styles.buttonPress: styles.button} onPress={this.renderFutureEvents}>
                                <Text style={this.state.futureEvents ? styles.timeTextPress : styles.timeText}>À venir</Text>
                            </TouchableOpacity>
                        </Animatable.View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    modalHolder: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        padding: 20,
        alignItems:'center',
        justifyContent:'center',
    },
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        height:350,
        paddingLeft: 20,
        paddingTop: 5,
        paddingRight: 20,
        paddingBottom: 15,
        elevation: 6
    },
    close: {
        alignSelf: 'flex-end',
        marginLeft: 15
    },
    head: {
        color: Global.mainColor,
        fontFamily: Global.secondFont,
        fontSize: 20
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: 15
    },
    sectionTitle: {
        fontSize: 18,
        textAlign: 'center',
        fontFamily: Global.mainFontBold
    },
    albert1: {
        width: 80,
        height: 80
    },
    albert2: {
        width: 80,
        height: 80
    },
    itemAlbert: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemGratuit: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 22,
        borderWidth: 2,
        borderColor: Global.mainColor
    },
    buttonPress: {
        backgroundColor: Global.mainColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 22
    },
    timeText: {
        color: Global.mainColor,
        textAlign: 'center',
        fontFamily: Global.mainFont,
        paddingTop: 8,
        paddingBottom: 9,
        paddingLeft: 10,
        paddingRight: 10
    },
    timeTextPress: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: Global.mainFont,
        paddingTop: 8,
        paddingBottom: 9,
        paddingLeft: 10,
        paddingRight: 10
    }
});
