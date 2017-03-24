import React from 'react';

import {
	StyleSheet,
	TouchableOpacity,
	Text,
	View,
	Image,
	Dimensions
} from 'react-native';

import Global from '../../Global';

import {
	Actions
} from 'react-native-router-flux';

const widthimage = (Dimensions.get('window').width) / 2 * 0.985;
const heightimage = (Dimensions.get('window').height - 88) / 4;

export default class CatTab extends React.Component {
	render() {
		return (
			<TouchableOpacity onPress={() => Actions.results({
				cat: this.props.cat
			})}>
				<View style={styles.viewCard}>
					<Image style={styles.image} source={this.props.imgURL}>
						<View style={styles.overlay}>
							<View style={styles.textView}>
								<Text style={styles.text}>
									{this.props.text}
								</Text>
							</View>
						</View>
					</Image>
				</View>
			</TouchableOpacity>
		)
	};
}

const styles = StyleSheet.create({
	image: {
		width: widthimage,
		height: heightimage,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	viewCard: {
		height: heightimage,
		borderWidth: 1,
		borderColor: Global.secondColor
	},
	textView: {
		flex: 1,
		justifyContent: 'center'
	},
	text: {
		color: Global.secondColor,
		fontFamily: Global.secondFontBold,
		fontSize: 21,
		textAlign: 'center'
	},
	overlay: {
		backgroundColor: 'rgba(0,0,0, 0.35)',
		height: heightimage,
		width: widthimage
	}
});
