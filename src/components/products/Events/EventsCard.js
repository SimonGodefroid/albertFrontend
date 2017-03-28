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
	Dimensions
} from 'react-native';
import Global from '../../../Global';
import Icon from 'react-native-vector-icons/Ionicons';
const widthimage = (Dimensions.get('window').width) / 1 * (1);
const heightimage = (Dimensions.get('window').height) / 1 * (0.70);
const month = "";

function getDate() {
	var currentTime = new Date();
	var todayDate = new Date(Date.UTC(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate()));
	return todayDate;
}

class EventsCard extends React.Component {
	constructor(props) {
		super(props);
		this.renderDate = this.renderDate.bind(this);
	}

	renderDate() {
		var currentTime = new Date();
		if (parseInt(this.props.year) < currentTime.getFullYear() || parseInt(this.props.year) <= currentTime.getFullYear() && parseInt(this.props.month) < (currentTime.getMonth() + 1) || parseInt(this.props.year) <= currentTime.getFullYear() && parseInt(this.props.month) <= (currentTime.getMonth() + 1) && parseInt(this.props.date) < currentTime.getDate()) {
			return (
				<View style={styles.dateHolder}>
					<Text style={styles.month}>A l'affiche</Text>
					<View style={styles.separator}></View>
					<Text style={styles.hours}><Icon name={'ios-time-outline'} size={16}/> {this.props.hourStart}</Text>
				</View>
			)
		} else if (parseInt(this.props.year) === currentTime.getFullYear() && parseInt(this.props.month) === (currentTime.getMonth() + 1) && parseInt(this.props.date) === currentTime.getDate()) {
			return (
				<View style={styles.dateHolder}>
					<Text style={styles.month}>Ce jour</Text>
					<View style={styles.separator}></View>
					<Text style={styles.hours}><Icon name={'ios-time-outline'} size={16}/> {this.props.hourStart}</Text>
				</View>
			)
		} else {
			return (
				<View style={styles.dateHolder}>
					<Text style={styles.day}>{this.props.date}</Text>
					<Text style={styles.month}>{month}</Text>
					<View style={styles.separator}></View>
					<Text style={styles.hours}><Icon name={'ios-time-outline'} size={16}/> {this.props.hourStart}</Text>
				</View>
			)
		}
	}

	render() {
		switch (this.props.month) {
			case '01':
				month = 'Janvier';
				break;
			case '02':
				month = 'Février';
				break;
			case '03':
				month = 'Mars';
				break;
			case '04':
				month = 'Avril';
				break;
			case '05':
				month = 'Mai';
				break;
			case '06':
				month = 'Juin';
				break;
			case '07':
				month = 'Juillet';
				break;
			case '08':
				month = 'Aout';
				break;
			case '09':
				month = 'Septembre';
				break;
			case '10':
				month = 'Octobre';
				break;
			case '11':
				month = 'Novembre';
				break;
			case '12':
				month = 'Décembre';
				break;
			default:
				break;
		}

		return (
			<View style={styles.eventsCard}>
				<Image style={styles.eventsImage} source={{
					uri: this.props.photo
				}} resizeMode={'cover'}>
					<View style={styles.overlay}>
						{this.renderDate()}
						<View style={styles.infosHolder}>
							<Text numberOfLines={2} style={styles.title}>{this.props.title}</Text>
							<Text numberOfLines={3} style={styles.place}>
								<Icon name={'ios-pin-outline'} size={20}/> {this.props.place}</Text>
							<View style={styles.categoryHolder}>
								<Text style={styles.category}>{this.props.category}</Text>
							</View>
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
		marginBottom: 5,
		elevation: 6,
		position: 'relative'
	},
	eventsImage: {
		flexDirection: 'row',
		width: widthimage,
		height: 200
	},
	overlay: {
		backgroundColor: 'rgba(0,0,0, 0.6)',
		width: widthimage,
		flexDirection: 'row'
	},
	dateHolder: {
		backgroundColor: 'rgba(60, 60, 60, 0.9)',
		alignItems: 'center',
		justifyContent: 'center',
		flex: 2,
		padding: 7
	},
	day: {
		fontFamily: Global.secondFontBold,
		fontSize: 45,
		color: Global.thirdColor
	},
	month: {
		fontFamily: Global.mainFontBold,
		fontSize: 18,
		color: Global.thirdColor
	},
	separator: {
		width: 20,
		height: 5,
		marginTop: 5,
		marginBottom: 5,
		backgroundColor: Global.thirdColor
	},
	hours: {
		fontFamily: Global.mainFont,
		fontSize: 14,
		color: Global.thirdColor
	},
	infosHolder: {
		paddingTop: 15,
		paddingLeft: 13,
		paddingRight: 15,
		paddingBottom: 10,
		flex: 6,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start',
		elevation: 3,
		position: 'relative'
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
		fontSize: 15,
		marginTop: 5,
		marginBottom: 5
	},
	categoryHolder: {
		backgroundColor: Global.secondColor,
		marginTop: 6,
		paddingTop: 2,
		paddingBottom: 2,
		paddingLeft: 10,
		paddingRight: 10,
		borderRadius: 3,
		elevation: 2
	},
	category: {
		color: Global.fifthColor,
		fontFamily: Global.fourthFont,
		fontSize: 12,
		marginTop: 5,
		marginBottom: 5
	}
});

export default EventsCard;
