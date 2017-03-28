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
	Platform
} from 'react-native';
import {
	Actions
} from 'react-native-router-flux';
import {
	TabViewAnimated,
	TabBar
} from 'react-native-tab-view';
import Global from '../Global';
import Api from '../Api';
import googleApi from '../googleApi';
import EventsCard from '../components/products/Events/EventsCard';
import PlacesCard from '../components/products/Places/PlacesCard';
import AlbertTab from '../components/core/AlbertTab';
import Loading from '../components/core/Loading';

class ResultsScene extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			events: new ListView.DataSource({
				rowHasChanged: (r1,
				r2) => r1 !== r2
			}),
			places: new ListView.DataSource({
				rowHasChanged: (r1,
				r2) => r1 !== r2
			}),
			index: 0,
			routes: [
				{
					key: '1',
					title: 'Events'
				}, {
					key: '2',
					title: 'Places'
				}
			]
		}
		this.renderCards = this.renderCards.bind(this);
		this.goToEvent = this.goToEvent.bind(this);
		this._handleChangeTab = this._handleChangeTab.bind(this);
		this._renderHeader = this._renderHeader.bind(this);
	}

	_handleChangeTab = (index) => {
		this.setState({
			index
		});
	};

	_renderHeader = (props) => {
		return <TabBar {...props}/>;
	};

	_renderScene = ({
		route
	}) => {
		switch (route.key) {
			case '1':
				return (
					<Image source={require('../../assets/img/bg-wv.png')} style={styles.container}>
						<View style={styles.eventsHolder}>
							<ListView dataSource={this.state.events} renderRow={this.renderCards}/>
						</View>
						<AlbertTab cat={this.props.cat} filter={true} style={{
							flex: 1
						}}/>
					</Image>
				);
			case '2':
				return (
					<Image source={require('../../assets/img/bg-wv.png')} style={styles.container}>
						<View style={styles.eventsHolder}>
							<ListView dataSource={this.state.places} renderRow={this.renderCards}/>
						</View>
						<AlbertTab cat={this.props.cat} filter={true} style={{
							flex: 1
						}}/>
					</Image>
				);
			default:
				return null;
		}
	};

	componentDidMount() {
		let events = [];
		let places = [];
		Api.getEvents(this.props.cat, (eventsList) => {
			console.log('Results#getEvents: ', eventsList.events);
			if (eventsList.events.length > 0) {
				eventsList.events.map(event => {
					events.push(event);
				});
				this.setState({
					events: this.state.events.cloneWithRows(events)
				});
			}

		});
		googleApi.getPlaces(this.props.cat, Places => {
			console.log("google sent:", Places.results);
			Places.results.map(place => {
				places.push(place);
			});
			this.setState({
				places: this.state.places.cloneWithRows(places)
			});
		});
	}

	goToEvent(rowData) {
		console.log('results#rowData is:', this, rowData);
		Actions.event({
			product: rowData
		});
	}

	renderCards(rowData) {
		if (rowData.reference !== undefined) {
			console.log("card = place");
			return (
				<TouchableOpacity onPress={() => Actions.place({
					product: rowData
				})}>
					<PlacesCard title={rowData.name} place={rowData.vicinity} category={rowData.types[0]}></PlacesCard>
				</TouchableOpacity>
			)
		} else {
			console.log("card = event");
			return (
				<TouchableOpacity onPress={() => this.goToEvent(rowData)}>
					<EventsCard photo={rowData.image.url} title={rowData.title} date={rowData.evenements.realDateStart.slice(8, 10)} month={rowData.evenements.realDateStart.slice(5, 7)} hourStart={rowData.evenements.periodes[0].seances.length > 0 ? rowData.evenements.periodes[0].seances[0].hourStart.slice(0, 5) : '00:00'} hourEnd={rowData.evenements.periodes[0].seances.length > 0 ? rowData.evenements.periodes[0].seances[0].hourEnd.slice(0, 5) : '00:00'} zipCode={rowData.place.zipCode} place={rowData.place.name} city={rowData.place.city} category={rowData.evenements.category.lvl1}/>
				</TouchableOpacity>
			);
		}
	}

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab}
      />
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: null,
		paddingTop: (Platform.OS === 'ios') ? 20 : 0
	},
	page: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	eventsHolder: {
		flex: 9,
		marginBottom: -20,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative'
	}
});

export default ResultsScene;
