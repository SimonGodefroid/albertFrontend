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

// best practice
	goToProfile() { 
		this.props.onCloseFn();
		Actions.profile({user:Api.getUser()});
	}

	render() {
		console.log('render$Api.getUser().account.username',Api.getUser());
		return (
			<View style={styles.modalHolder}>
				<View style={styles.container}>
					<TouchableOpacity style={styles.close} onPress={this.props.onCloseFn}>
						<Icon name={'ios-close-circle-outline'} size={50} color={Global.secondColor}/>
					</TouchableOpacity>
					<Text style={styles.titleSection}>Faites une recherche <Icon name={'ios-search-outline'} size={25} color={Global.secondColor}/></Text>
					<TouchableOpacity>
						<Text style={styles.menuEntries}>Manger</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.menuEntries}>Boire</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.menuEntries}>Bouger</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.menuEntries}>Ecouter</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.menuEntries}>Découvrir</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.menuEntries}>Acheter</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.menuEntries}>Se détendre</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.menuEntries}>Travailler</Text>
					</TouchableOpacity>
					<View style={styles.separator}></View>
					<Text style={styles.titleSection}>Bonjour {Api.getUsername()} ! <Icon name={'ios-happy-outline'} size={25}/></Text>
					<TouchableOpacity onPress={this.goToProfile}>
						<Text style={styles.menuEntries}>Voir mon profil</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => Api.logOut(() => {
						Actions.login({});
						this.props.onCloseFn();
					})}>
						<Text style={styles.menuEntries}>Déconnexion</Text>
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
		fontSize: 18,
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
