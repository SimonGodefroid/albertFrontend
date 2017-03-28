import React from 'react';
import {
<<<<<<< HEAD
    StyleSheet,
    Text,
    Image,
    View,
    ScrollView,
    ActivityIndicator,
    ListView,
    TouchableOpacity
=======
	StyleSheet,
	Text,
	Image,
	View,
	ScrollView,
	ActivityIndicator,
	ListView,
	TouchableOpacity,
  Platform
>>>>>>> d234a6331d0ae2e1d03019623d438c06a458a2ef
} from 'react-native';
import {
	Actions
} from 'react-native-router-flux';
import Global from '../Global';
import Api from '../Api';
import googleApi from '../googleApi';
import events from '../albert.events.json';
import EventsCard from '../components/products/EventsCard';
import PlacesCard from '../components/products/PlacesCard';
import AlbertTab from '../components/core/AlbertTab';
import Loading from '../components/core/Loading';

class ResultsScene extends React.Component {
<<<<<<< HEAD
    constructor(props) {
        super(props);
        this.state = {
            results: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            })
        }
        this.renderCards = this.renderCards.bind(this);
        this.goToEvent = this.goToEvent.bind(this);
    }

    componentDidMount() {
      let results = [];
        Api.getEvents(this.props.cat, (eventsList) => {
          console.log('Results#getEvents: ', eventsList.events[0]);
          if (eventsList.events.length > 0) {
            eventsList.events.map(event => {
              results.push(event);
            });
          }
          googleApi.getPlaces(this.props.cat, Places => {
            console.log("google sent:", Places.results);
            Places.results.map(place => {
              results.push(place);
            });
            this.setState({results: this.state.results.cloneWithRows(results)});
          });
        });
      }

    goToEvent(rowData) {
      console.log('results#rowData is:', this,rowData);
      Actions.product({product: rowData});
    }
=======
	constructor(props) {
		super(props);
		this.state = {
			results: new ListView.DataSource({
				rowHasChanged: (r1,
				r2) => r1 !== r2
			})
		}
		this.renderCards = this.renderCards.bind(this);
		this.goToEvent = this.goToEvent.bind(this);
	}
>>>>>>> d234a6331d0ae2e1d03019623d438c06a458a2ef

	componentDidMount() {
		let results = [];
		Api.getEvents(this.props.cat, (eventsList) => {
			console.log('Results#getEvents: ', eventsList.events[0]);
			if (eventsList.events.length > 0) {
				eventsList.events.map(event => {
					results.push(event);
				});
			}
			googleApi.getPlaces(this.props.cat, Places => {
				console.log("google sent:", Places.results);
				Places.results.map(place => {
					results.push(place);
				});
				this.setState({
					results: this.state.results.cloneWithRows(results)
				});
			});
		});
	}

<<<<<<< HEAD
    renderCards(rowData) {
      if (rowData.reference !== undefined) {
        return (
          <PlacesCard
            title={rowData.name}
            place={rowData.vicinity}
            category={rowData.types[0]}>
          </PlacesCard>
        )
      } else {
          return (
            <TouchableOpacity onPress={() => this.goToEvent(rowData)}>
              <EventsCard
              photo={rowData.image.url}
              title={rowData.title}
              date={rowData.evenements.realDateStart.slice(8,10)}
              month={rowData.evenements.realDateStart.slice(5,7)}
              year={rowData.evenements.realDateStart.slice(0,4)}
              hourStart={rowData.evenements.periodes[0].seances.length > 0 ? rowData.evenements.periodes[0].seances[0].hourStart.slice(0, 5) : '00:00'}
              hourEnd={rowData.evenements.periodes[0].seances.length > 0 ? rowData.evenements.periodes[0].seances[0].hourEnd.slice(0, 5) : '00:00' }
              zipCode={rowData.place.zipCode}
              place={rowData.place.name}
              city={rowData.place.city}
              category={rowData.evenements.category.lvl1}/>
            </TouchableOpacity>
            );
          }
    }

    render() {
      console.log("this.state", this.state)
        if (this.state.results.getRowCount() === 0) {
          console.log(this.props.cat);
            return (
                <Loading />
            );
        } else {
            return (
                <Image source={require('../../assets/img/bg-wv.png')} style={styles.container}>
                  <View style={styles.eventsHolder}>
                    <ListView dataSource={this.state.results} renderRow={this.renderCards}/>
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
          alignItems: 'center',
          justifyContent:'center',
        },

    });
=======
	goToEvent(rowData) {
		console.log('results#rowData is:', this, rowData);
		Actions.product({
			product: rowData
		});
	}

	renderCards(rowData) {
		if (rowData.reference !== undefined) {
			return (
				<PlacesCard title={rowData.name} place={rowData.vicinity} category={rowData.types[0]}></PlacesCard>
			)
		} else {
			return (
				<TouchableOpacity onPress={() => this.goToEvent(rowData)}>
					<EventsCard photo={rowData.image.url} title={rowData.title} date={rowData.evenements.realDateStart.slice(8, 10)} month={rowData.evenements.realDateStart.slice(5, 7)} year={rowData.evenements.realDateStart.slice(0, 4)} hourStart={rowData.evenements.periodes[0].seances.length > 0 ? rowData.evenements.periodes[0].seances[0].hourStart.slice(0, 5) : '00:00'} hourEnd={rowData.evenements.periodes[0].seances.length > 0 ? rowData.evenements.periodes[0].seances[0].hourEnd.slice(0, 5) : '00:00'} zipCode={rowData.place.zipCode} place={rowData.place.name} city={rowData.place.city} category={rowData.evenements.category.lvl1}/>
				</TouchableOpacity>
			);
		}
	}

	render() {
		console.log("this.state", this.state)
		if (this.state.results.getRowCount() === 0) {
			console.log(this.props.cat);
			return (
				<Loading/>
			);
		} else {
			return (
				<Image source={require('../../assets/img/bg-wv.png')} style={styles.container}>
					<View style={styles.eventsHolder}>
						<ListView dataSource={this.state.results} renderRow={this.renderCards}/>
					</View>
					<AlbertTab cat={this.props.cat} filter={true} style={{
						flex: 1
					}}/>
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
		paddingTop: (Platform.OS === 'ios') ? 20 : 0
	},
	eventsHolder: {
		flex: 9,
		marginBottom: -20,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative'
	}
});
>>>>>>> d234a6331d0ae2e1d03019623d438c06a458a2ef

export default ResultsScene;
