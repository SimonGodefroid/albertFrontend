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
import googleApi from '../googleApi';
import events from '../albert.events.json';
import EventsCard from '../components/products/EventsCard';
import AlbertTab from '../components/core/AlbertTab';
import Loading from '../components/core/Loading';

class ResultsScene extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),
            places: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            })
        }
        this.renderCards = this.renderCards.bind(this);
        this.goToEvent = this.goToEvent.bind(this);
    }

    componentDidMount() {
      if (this.props.cat === 3 || this.props.cat === 4 || this.props.cat === 5) {
        Api.getEvents(this.props.cat, (eventsList) => {
          console.log('Results#getEvents: ', eventsList.events[0]);
          this.setState({events: this.state.events.cloneWithRows(eventsList.events)}, console.log("events state is", this.state.events));
        });
      } else if (this.props.cat === 1) {
        googleApi.getFood(foodPlaces => {
          console.log("google sent:", foodPlaces.results);
          this.setState({places: this.state.places.cloneWithRows(foodPlaces.results)}, console.log("places state is", this.state.places))
        }
      );
      }
    }

    goToEvent(rowData) {
      console.log('results#rowData is:', this,rowData);
      Actions.product({product: rowData});
    }


    renderCards(rowData) {
        if (this.props.cat === 3 || this.props.cat === 4 || this.props.cat === 5) {
          return (
            <TouchableOpacity onPress={() => this.goToEvent(rowData)} style={styles.touchable}>
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
        } else {
          return (
            <Text>
              {rowData.name}
            </Text>
            );
        }
    }

    render() {
      console.log("this.state", this.state)
        if (this.state.events.getRowCount() === 0) {
          console.log(this.props.cat);
            return (
                <Loading />
            );
        } else {
            return (
                <Image source={require('../../assets/img/bg-wv.png')} style={styles.container}>
                  <View style={styles.eventsHolder}>
                    <ListView dataSource={this.state.events} renderRow={this.renderCards}/>
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
          marginBottom:-20,
          alignItems: 'center',
          justifyContent:'center',
          position:'relative',
        },
    });

    export default ResultsScene;
