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
import Api from '../../Api';
import Icon from 'react-native-vector-icons/Ionicons';
import {
	Actions
} from 'react-native-router-flux';

export default class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.goToProfile = this.goToProfile.bind(this);
	}

	goToProfile(callback) {
		Actions.profile({user:Api.getUser()});
		callback();
	}

	render() {
		return (
			<View style={styles.modalHolder}>
				<View style={styles.container}>
					<TouchableOpacity style={styles.close} onPress={this.props.onCloseFn}>
						<Icon name={'ios-close-circle-outline'} size={50} color={Global.secondColor}/>
					</TouchableOpacity>
					<Text style={styles.titleSection}>Faites une recherche <Icon name={'ios-search'} size={22}/></Text>
					<TouchableOpacity>
						<Text style={styles.menuEntries}>Manger <Icon name={'ios-restaurant-outline'} size={20}/></Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.menuEntries}>Boire <Icon name={'ios-beer-outline'} size={20}/></Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.menuEntries}>Bouger <Icon name={'ios-walk-outline'} size={20}/></Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.menuEntries}>Ecouter <Icon name={'ios-musical-notes-outline'} size={20}/></Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.menuEntries}>Découvrir <Icon name={'ios-eye-outline'} size={20}/></Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.menuEntries}>Acheter <Icon name={'ios-basket-outline'} size={20}/></Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.menuEntries}>Se détendre <Icon name={'ios-bicycle-outline'} size={20}/></Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.menuEntries}>Travailler <Icon name={'ios-clipboard-outline'} size={20}/></Text>
					</TouchableOpacity>
					<View style={styles.separator}></View>
					<Text style={styles.titleSection}>Bonjour {Api.getUser().account.username} ! <Icon name={'ios-happy-outline'} size={22}/></Text>
					<TouchableOpacity onPress={() => this.goToProfile(this.props.onCloseFn)}>
						<Text style={styles.menuEntries}>Voir mon profil <Icon name={'ios-contact-outline'} size={20}/></Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => Api.logOut(() => {
						Actions.login({});
						this.props.onCloseFn();
					})}>
						<Text style={styles.menuEntries}>Déconnexion <Icon name={'ios-log-out-outline'} size={20}/></Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	modalHolder: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 0
	},
	container: {
		backgroundColor: 'rgba(92, 190, 180, 0.93)',
		flex: 1,
		width: '100%',
		paddingLeft: 30,
		paddingTop: 10,
		paddingRight: 20,
		paddingBottom: 15,
		elevation: 10,
		alignItems: 'flex-start'
	},
	close: {
		alignSelf: 'flex-end'
	},
	titleSection: {
		fontSize: 26,
		fontFamily: Global.FifthFont,
		color: Global.secondColor,
		borderBottomColor: '#fff',
		borderBottomWidth: 1,
		paddingBottom: 10,
		marginBottom: 10
	},
	menuEntries: {
		fontSize: 20,
		paddingBottom: 5,
		marginTop: 5,
		marginBottom: 5,
		fontFamily: Global.secondFont,
		color: Global.secondColor
	},
	separator: {
		width: 270,
		backgroundColor: Global.secondColor,
		height: 3,
		marginTop: 10,
		marginBottom: 10
	}
});
