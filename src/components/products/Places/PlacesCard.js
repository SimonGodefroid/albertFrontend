import React from 'react';

import {
	StyleSheet,
	Text,
	Image,
	View,
	TouchableOpacity,
	Dimensions
} from 'react-native';

import Global from '../../../Global';
import Icon from 'react-native-vector-icons/Ionicons';

class PlacesCard extends React.Component {
	render() {
		return (
			<View style={styles.eventsCard}>
				{/* <Image
        style={styles.eventsImage}
        source={{
          uri: this.props.photo
          }}
        resizeMode={'cover'}> */}
				<View style={styles.overlay}>
					<View style={styles.infosHolder}>
						<Text numberOfLines={2} style={styles.title}>{this.props.title}</Text>
						<Text numberOfLines={3} style={styles.place}>
							<Icon name={'ios-pin-outline'} size={20}/> {this.props.place}
						</Text>
						<View style={styles.categoryHolder}>
							<Text style={styles.category}>{this.props.category}</Text>
						</View>
					</View>
				</View>
				{/* </Image> */}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	eventsCard: {
		backgroundColor: '#333',
		flexDirection: 'row',
		marginBottom: 5,
		elevation: 6
	},
	eventsImage: {
		flexDirection: 'row',
		width: (Dimensions.get('window').width) / 1 *(1),
		height: 200
	},
	overlay: {
		backgroundColor: 'rgba(0,0,0, 0.6)',
		width: (Dimensions.get('window').width) / 1 *(1),
		flexDirection: 'row'
	},
	infosHolder: {
		paddingTop: 30,
		paddingLeft: 13,
		paddingRight: 15,
		paddingBottom: 30,
		flex: 6,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start',
		elevation: 3
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
		backgroundColor: Global.mainColor,
		marginTop: 6,
		paddingTop: 4,
		paddingBottom: 4,
		paddingLeft: 6,
		paddingRight: 6,
		borderRadius: 3,
		elevation: 2
	},
	category: {
		color: '#000',
		fontFamily: Global.fourthFont,
		fontSize: 12,
		marginTop: 5,
		marginBottom: 5
	}
});

export default PlacesCard;
