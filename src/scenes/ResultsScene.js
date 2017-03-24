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
import {Actions} from 'react-native-router-flux';
import Global from '../Global';
import Api from '../Api';
import events from '../albert.events.json';
import EventsCard from '../components/products/EventsCard';
import AlbertTab from '../components/core/AlbertTab';

class ResultsScene extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            })
        }
        this.renderEvents = this.renderEvents.bind(this);
        this.goToEvent = this.goToEvent.bind(this);
    }

    componentDidMount() {
      console.log('didmount');
        Api.getEvents(this.props.cat, (eventsList) => {
          console.log('Results#getEvents: ', eventsList.events[0]);
            this.setState({events: this.state.events.cloneWithRows(eventsList.events)});
        });
    }

    goToEvent(rowData) {
      console.log('results#rowData is:', this,rowData);
      Actions.product({product: rowData});
    }


    renderEvents(rowData) {
        return (
          <TouchableOpacity onPress={() => this.goToEvent(rowData)}>
            <EventsCard
            photo={rowData.image.url}
            title={rowData.title}
            date={rowData.evenements.realDateStart.slice(8,10)}
            month={rowData.evenements.realDateStart.slice(5,7)}
            hourStart={rowData.evenements.periodes[0].seances.length > 0 ? rowData.evenements.periodes[0].seances[0].hourStart.slice(0, 5) : '00:00'}
            hourEnd={rowData.evenements.periodes[0].seances.length > 0 ? rowData.evenements.periodes[0].seances[0].hourEnd.slice(0, 5) : '00:00' }
            zipCode={rowData.place.zipCode}
            place={rowData.place.name}
            city={rowData.place.city}
            category={rowData.evenements.category.lvl1}/>
          </TouchableOpacity>
          );
    }

    render() {
        if (this.state.events.getRowCount() === 0) {
          console.log(this.props.cat);
            return (
                <Image source={require('../../assets/img/bg-wv.png')} style={styles.container}>
                    <ActivityIndicator color={'#FF5A5F'}/>
                </Image>
            );
        } else {
            return (
                <Image source={require('../../assets/img/bg-wv.png')} style={styles.container}>
                  <View style={styles.eventsHolder}>
                    <ListView dataSource={this.state.events} renderRow={this.renderEvents}/>
                    </View>
                    <AlbertTab cat={this.props.cat} filter={true} style={{flex:1}}/>
                </Image>
            );
        }

    }
  }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          resizeMode: 'cover',
          width: null,
        },
        eventsHolder : {
          flex:9,
          paddingTop:5,
          paddingLeft:5,
          paddingRight:5,
          alignItems: 'center',
          justifyContent:'center',
        },

    });

    export default ResultsScene;
