import React from 'react';
import {
	StyleSheet,
	Text,
	Image,
	View,
	ScrollView,
	TouchableOpacity,
	Dimensions
} from 'react-native';
import {
	Actions
} from 'react-native-router-flux';
import AlbertTab from '../components/core/AlbertTab';
import Images from '../components/core/Images';
import CatTab from '../components/core/CatTab';
import Global from '../Global';

const widthimage = (Dimensions.get('window').width) / 2 * 0.985;
const heightimage = (Dimensions.get('window').height - 88) / 4;

class SearchScene extends React.Component {
	render() {
		return (
			<View style={{
				flex: 1
			}}>
				<View style={styles.container}>
					<CatTab cat={1} imgURL={Images.searchManger} text={'MANGER'}/>
					<CatTab cat={2} imgURL={Images.searchBoire} text={'BOIRE'}/>
					<CatTab cat={3} imgURL={Images.searchBouger} text={'BOUGER'}/>
					<CatTab cat={4} imgURL={Images.searchEcouter} text={'ECOUTER'}/>
					<CatTab cat={5} imgURL={Images.searchDecouvrir} text={'DECOUVRIR'}/>
					<CatTab cat={6} imgURL={Images.searchAcheter} text={'ACHETER'}/>
					<CatTab cat={7} imgURL={Images.searchSeDetendre} text={'SE \n DETENDRE'}/>
					<CatTab cat={8} imgURL={Images.searchTravailler} text={'TRAVAILLER'}/>
				</View>
				<AlbertTab style={{
					flex: 1
				}}/>
			</View>

		);
	}

}

export default SearchScene;

const styles = StyleSheet.create({
	container: {
		paddingTop: 2,
		flex: 9,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
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
