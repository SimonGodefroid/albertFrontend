import React from 'react';
import {
	StyleSheet,
	Text,
	Image,
	View,
	ScrollView,
	TouchableOpacity,
	Dimensions,
  Alert,
	Platform
} from 'react-native';
import {
	Actions
} from 'react-native-router-flux';
import AlbertTab from '../components/core/AlbertTab';
import Images from '../components/core/Images';
import CatTab from '../components/core/CatTab';
import Global from '../Global';
import * as Animatable from 'react-native-animatable';

class SearchScene extends React.Component {
	render() {
		return (
			<View style={{
				flex: 1,
				backgroundColor:'#000',
			}}>
				<View style={styles.container}>
					<Animatable.View animation="fadeIn" delay={100} >
						<CatTab cat={1} imgURL={Images.searchManger} text={'MANGER'}/>
					</Animatable.View>
					<Animatable.View animation="fadeIn" delay={200} >
						<CatTab cat={2} imgURL={Images.searchBoire} text={'BOIRE'}/>
					</Animatable.View>
					<Animatable.View animation="fadeIn" delay={300} >
						<CatTab cat={3} imgURL={Images.searchBouger} text={'BOUGER'}/>
					</Animatable.View>
					<Animatable.View animation="fadeIn" delay={400} >
						<CatTab cat={4} imgURL={Images.searchEcouter} text={'ECOUTER'}/>
					</Animatable.View>
					<Animatable.View animation="fadeIn" delay={500} >
						<CatTab cat={5} imgURL={Images.searchDecouvrir} text={'DECOUVRIR'}/>
					</Animatable.View>
					<Animatable.View animation="fadeIn" delay={600} >
						<CatTab cat={6} imgURL={Images.searchAcheter} text={'ACHETER'}/>
					</Animatable.View>
					<Animatable.View animation="fadeIn" delay={700} >
						<CatTab cat={7} imgURL={Images.searchSeDetendre} text={'SE \n DETENDRE'}/>
					</Animatable.View>
					<Animatable.View animation="fadeIn" delay={800} >
						<CatTab cat={8} imgURL={Images.searchTravailler} text={'TRAVAILLER'}/>
					</Animatable.View>
				</View>
				<Animatable.View animation="fadeInUp" delay={250} >
				<AlbertTab style={{
					flex: 1
				}} filter={false}/>
				</Animatable.View>
			</View>

		);
	}

}

export default SearchScene;

const styles = StyleSheet.create({
	container: {
		paddingTop: (Platform.OS === 'ios') ? 26 : 0,
		flex: 9,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
});
