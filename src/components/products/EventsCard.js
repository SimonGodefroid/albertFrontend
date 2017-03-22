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
    Dimensions,
} from 'react-native';
import Global from '../../Global';
import Icon from 'react-native-vector-icons/Ionicons';

const widthimage = (Dimensions.get('window').width)/1*(1);
const heightimage = (Dimensions.get('window').height)/1*(0.70);

class EventsCard extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.eventsCard}>
                <Image
                  style={styles.eventsImage}
                  source={{
                      uri: this.props.photo
                  }}
                  resizeMode={'cover'}
                  >
                    <View style={styles.overlay}>
                        <View style={styles.dateHolder}>
                            <Text style={styles.day}>22</Text>
                            <Text style={styles.month}>Décembre</Text>
                            <View style={styles.separator}></View>
                            <Text style={styles.hours}>{this.props.hourStart} {this.props.hourEnd}</Text>
                        </View>
                        <View style={styles.infosHolder}>
                            <Text numberOfLines={2} style={styles.title}>{this.props.title}</Text>
                            <Text numberOfLines={3} style={styles.place}>
                              <Icon name={'ios-pin-outline'} size={20}/> {this.props.place}{'\n'}{this.props.zipCode} - {this.props.city}</Text>
                            <Text style={styles.category}>{this.props.category}</Text>
                        </View>
                    </View>
                </Image>
            </View>
        );
    }

}



const styles = StyleSheet.create({
    eventsCard: {
        backgroundColor: '#333',
        flexDirection: 'row',
        marginBottom:10,
    },
    eventsImage: {
          flexDirection: 'row',
          width: widthimage,
          height: 200,
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0, 0.45)',
        width:widthimage,
        flexDirection: 'row',
    },
    dateHolder: {
        backgroundColor: 'rgba(75, 75, 75, 0.88)',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 2,
        padding: 7,
    },
    day: {
        fontFamily: Global.secondFontBold,
        fontSize:45,
        color: Global.secondColor
    },
    month: {
        fontFamily: Global.mainFontBold,
        fontSize: 18,
        color: Global.secondColor
    },
    separator: {
        width: 20,
        height: 5,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: '#fff'
    },
    hours: {
        fontFamily: Global.mainFont,
        fontSize: 14,
        color: Global.secondColor
    },
    infosHolder: {
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 15,
        paddingBottom: 10,
        flex: 6,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    title: {
        fontFamily: Global.secondFontBold,
        fontSize: 22,
        color: Global.secondColor,
        paddingRight: 20,
        marginTop: 5,
        marginBottom: 5
    },
    place: {
        fontFamily: Global.secondFont,
        color: Global.secondColor,
        paddingRight: 8,
        fontSize: 16,
        marginTop: 5,
        marginBottom: 5
    },
    category: {
        color: '#e4e4e4',
        fontFamily: Global.secondFont,
        fontSize:12,
        marginTop: 5,
        marginBottom: 5
    }
});

export default EventsCard;
