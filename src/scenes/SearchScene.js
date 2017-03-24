import React from 'react';
import {
	StyleSheet,
	Text,
	Image,
	View,
	ScrollView,
	TouchableOpacity,
	Dimensions,
  Alert
} from 'react-native';
import {
	Actions
} from 'react-native-router-flux';
import AlbertTab from '../components/core/AlbertTab';
import Images from '../components/core/Images';
import CatTab from '../components/core/CatTab';
import Global from '../Global';


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
});
