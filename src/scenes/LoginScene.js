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
	Alert,
	TextInput,
  Dimensions,
} from 'react-native';

import {
	Actions
} from 'react-native-router-flux';

import Api from '../Api';
import Global from '../Global';
import Button from '../components/core/Button';

export default class LoginScene extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: 'user',
			password: 'password01'
		}
		this.onSubmitPress = this.onSubmitPress.bind(this);
	}

	onSubmitPress() {
		let user = {
			email: this.state.email,
			password: this.state.password
		};
		console.log(user);
		Actions.search({})
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.logo_container}>
					<Image source={require('../../assets/img/logo.png')} style={styles.logo}/>
					<Text style={styles.title}>
						ALBERT
					</Text>
				</View>
				<View>
					<TextInput autoCorrect={false} underlineColorAndroid={'transparent'} style={styles.input} placeholder="E-mail" onChangeText={(email) => this.setState({
						email
					})} value={this.state.email}/>
					<TextInput autoCorrect={false} underlineColorAndroid={'transparent'} style={styles.input} placeholder="Password" secureTextEntry={true} onChangeText={(password) => this.setState({
						password
					})} value={this.state.password}/>
					<TouchableOpacity onPress={this.onSubmitPress} style={styles.login_button}>
						<Text style={styles.login_text}>
							CONNEXION
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const PADDING = 60;
const inputWidth = Dimensions.get('window').width - (PADDING * 2);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		//height: '100%',
		//width: '100%',
		backgroundColor: '#59BDB2',
		paddingTop: 60,
		paddingBottom: 60
	},
  logo_container: {
    alignItems: 'center'
  },
	logo: {
		width: 150,
		height: 160
	},
	input: {
		height: 60,
		borderWidth: 1,
		backgroundColor: 'transparent',
		color: 'white',
		//width: '60%',
    width: inputWidth,
		borderRadius: 25,
		borderColor: 'white',
		borderWidth: 3,
		marginBottom: 20,
		fontFamily: Global.secondFont,
		fontSize: 20,
		padding: 20,
		textAlign: 'center'
	},
	title: {
		fontFamily: Global.mainFont,
		fontSize: 50,
		color: 'white',
		borderBottomColor: '#59BDB2',
		borderBottomWidth: 5
	},
	login_button: {
		backgroundColor: 'white',
		padding: 15,
		borderRadius: 25,
		alignItems: 'center'
	},
	login_text: {
		color: '#59BDB2',
		alignItems: 'center',
		fontFamily: Global.mainFont,
		fontSize: 30
	}
});
