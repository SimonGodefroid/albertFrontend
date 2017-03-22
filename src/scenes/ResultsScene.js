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

class ResultsScene extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            })
        }
        this.renderEvents = this.renderEvents.bind(this);
    }

    componentDidMount() {
      console.log('didmount');
        Api.getEvents(this.props.cat, (eventsList) => {
          console.log('Results#getEvents: ', eventsList.events[0]);
            this.setState({events: this.state.events.cloneWithRows(eventsList.events)});
        });
    }

    goToEvent(rowData) {
      Actions.product(rowData);
    }


    renderEvents(rowData) {
        return (
          <TouchableOpacity onPress={this.goToEvent}>
            <EventsCard
            photo={rowData.image.url}
            title={rowData.title}
            date={rowData.evenements.realDateStart.slice(8,10)}
            month={rowData.evenements.realDateStart.slice(5,7)}
            hourStart={rowData.evenements.periodes[0] !== undefined ? rowData.evenements.periodes[0].seances[0].hourStart.slice(0, 5) : '00:00'}
            hourEnd={rowData.evenements.periodes[0] !== undefined ? rowData.evenements.periodes[0].seances[0].hourEnd.slice(0, 5) : '00:00' }
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
                <View style={{paddingTop:80}}>
                    <ActivityIndicator color={'#FF5A5F'}/>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <ListView dataSource={this.state.events} renderRow={this.renderEvents}/>
                </View>
            );
        }

    }
  }

    const styles = StyleSheet.create({
        container: {
            padding: 15,
            paddingTop: 15
        }
    });

    export default ResultsScene;
