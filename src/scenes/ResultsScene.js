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
			eventsData: [],
			events: new ListView.DataSource({
				rowHasChanged: (r1, r2) => r1 !== r2
			}),
			places: new ListView.DataSource({
				rowHasChanged: (r1, r2) => r1 !== r2
			}),
			index: 0,
			routes: [
				{
					key: '1',
					title: 'Loading..'
				},
				{
					key: '2',
					title: 'Loading..'
				}
			],
			fetching: true,
			paidEvents: true,
		}

		this.renderCards = this.renderCards.bind(this);
		this.goToEvent = this.goToEvent.bind(this);
		this._handleChangeTab = this._handleChangeTab.bind(this);
		this._renderHeader = this._renderHeader.bind(this);
		this.renderNoResults = this.renderNoResults.bind(this);
		this.changeFilter = this.changeFilter.bind(this);
	}

	_handleChangeTab = (index) => {
		this.setState({
			index
		});
	};

	_renderHeader = (props) => {
		return <TabBar
			tabStyle={{backgroundColor: Global.mainColor}}
			labelStyle={{color: Global.secondColor, fontWeight:'bold',}}
			indicatorStyle={{backgroundColor:Global.thirdColor}}

			{...props}/>;
	};

	changeFilter(isPaidEvents) {
		const filteredEvents = this.getFilteredEvents(isPaidEvents);
		this.setState({
			paidEvents: isPaidEvents,
			events: this.state.events.cloneWithRows(filteredEvents),
		});
	}

	getFilteredEvents(isPaidEvents) {
		const {
			eventsData,
		} = this.state;

		const filteredEvents = [];

		if (isPaidEvents === true) {
			return eventsData;
		}

		eventsData.forEach((event) => {
			if (isPaidEvents === false) {
				if (event.modality.priceType === 'gratuit') {
					filteredEvents.push(event);
				}
			}
		});
		return filteredEvents;
	}

	renderNoResults() {
		if (this.state.fetching === true) {
			return(
				<Loading/>
			);
		} else {
			return(
				<View style={styles.noresults}>
					<Text style={styles.notfound}>Oops !{'\n'}Albert n'a trouvé aucun résultat pour le moment... :(</Text>
				</View>
			);
		}

	}

  renderEvents() {
    if (eventsList.events.length > 0) {
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
    } else {
      <Text>
        Désolé, Albert n'a pas trouvé d'évènement :(
      </Text>
    }
  }

	renderAlbertTab() {
		return (
			<AlbertTab
				cat={this.props.cat}
				filter={true}
				isPaidEvents={this.state.paidEvents}
				onChangeFilterFn={this.changeFilter}
				style={{
					flex: 1
				}} />
		);
	}

	_renderScene = ({
		route
	}) => {
		switch (route.key) {
			case '1':
			if (this.state.events.getRowCount() === 0) {
				return(
					<Image source={require('../../assets/img/bg-wv.png')} style={styles.container}>
						{this.renderNoResults()}
						{this.renderAlbertTab()}
					</Image>
				);
			} else {
				return (
					<Image source={require('../../assets/img/bg-wv.png')} style={styles.container}>
						<View style={styles.eventsHolder}>
							<ListView dataSource={this.state.events} enableEmptySections={true} renderRow={this.renderCards}/>
						</View>
						{this.renderAlbertTab()}
					</Image>
				);
			}
			case '2':
			if (this.state.places.getRowCount() === 0) {
				return(
					<Image source={require('../../assets/img/bg-wv.png')} style={styles.container}>
						{this.renderNoResults()}
						{this.renderAlbertTab()}
					</Image>
				);
			} else {
				return (
					<Image source={require('../../assets/img/bg-wv.png')} style={styles.container}>
						<View style={styles.eventsHolder}>
							<ListView dataSource={this.state.places} enableEmptySections={true} renderRow={this.renderCards}/>
						</View>
						{this.renderAlbertTab()}
					</Image>
				);
			}
			default:
				return null;
		}
	};

	// componentWillMount() {
	// 	this.setState({
	// 		paidEvents: this.props.paidEvents
	// 	})
	// }

	componentDidMount() {
		console.log("result scene props paid", this.props.paidEvents);
		let events = [];
		let places = [];

		Api.getEvents(this.props.cat, (eventsList) => {
			console.log('Results#getEvents: ', eventsList.events);
			if (eventsList.events.length > 0) {
				eventsList.events.map(event => {
					if (this.state.paidEvents === false && event.modality.priceType === "gratuit") {
						events.push(event);
					} else if (this.state.paidEvents === true) {
						events.push(event);
					}
				});
				console.log("fetched events")
			};
      googleApi.getPlaces(this.props.cat, Places => {
  			console.log("google sent:", Places.results);
  			Places.results.map(place => {
  				places.push(place);
					console.log("fetched places")
  			});
        if (events.length > 0 && places.length > 0) {
          this.setState({
						eventsData: events,
						placesData: places,
						events: this.state.events.cloneWithRows(events),
						places: this.state.places.cloneWithRows(places),
						fetching: false,
            routes: [
              {
                key: '1',
                title: 'Events'
              },
              {
                key: '2',
                title: 'Places'
              }
            ]
          });
        } else if (events.length === 0 && places.length > 0) {
					this.setState({
						eventsData: events,
						placesData: places,
						events: this.state.events.cloneWithRows(events),
						places: this.state.places.cloneWithRows(places),
						fetching: false,
						index:1,
						routes: [
							{
								key: '1',
								title: 'Events'
							},
							{
								key: '2',
								title: 'Places'
							}
						]
					});
				} else if (events.length > 0 && places.length === 0) {
					this.setState({
						eventsData: events,
						placesData: places,
						events: this.state.events.cloneWithRows(events),
						places: this.state.places.cloneWithRows(places),
						fetching: false,
						index:0,
						routes: [
							{
								key: '1',
								title: 'Events'
							},
							{
								key: '2',
								title: 'Places'
							}
						]
					});
				} else if (events.length === 0 && places.length === 0) {
					this.setState({
						eventsData: events,
						placesData: places,
						events: this.state.events.cloneWithRows(events),
						places: this.state.places.cloneWithRows(places),
						fetching: false,
						index:0,
						routes: [
							{
								key: '1',
								title: 'Events'
							},
							{
								key: '2',
								title: 'Places'
							}
						]
					});
				}
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
      // console.log('results#rowData is:', this);
      // console.log('results#rowData.photos.length is:', rowData.photos);

      const photos = rowData.photos || [];
      // console.log('results#rowData.photos.length is:', photos);
      return (
        <TouchableOpacity onPress={() => Actions.place({product: rowData})}>
          <PlacesCard
            photos={photos}
            title={rowData.name}
            place={rowData.vicinity}
            category={rowData.types[0]}>
          </PlacesCard>
        </TouchableOpacity>
      )
    } else {
        return (
          <TouchableOpacity onPress={() => this.goToEvent(rowData)}>
            <EventsCard
            photo={rowData.image.url}
            title={rowData.title}
            year={rowData.evenements.realDateStart.slice(0, 4)}
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
	tab: {
		backgroundColor:Global.secondColor,
	},
	tabTitle: {
		color:Global.mainColor,
	},
	eventsHolder: {
		flex: 9,
		marginBottom: -20,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative'
	},
	noresults:{
		flex:1,
		alignItems:'center',
		justifyContent:'center',
	},
	notfound:{
		textAlign:'center',
		fontSize:20,
	}
});

export default ResultsScene;
