import React from 'react';
import {
	StyleSheet,
	Text,
	Image,
	View,
} from 'react-native';

import Global from '../../Global';

import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/Ionicons';

class Star extends React.Component {
	render() {
		return (
      <View>
      <StarRating
        disabled={true}
        emptyStar={'ios-star-outline'}
        fullStar={'ios-star'}
        halfStar={'ios-star-half'}
        iconSet={'Ionicons'}
        maxStars={5}
        rating={this.props.rating}
        starColor={Global.thirdColor}
        emptyStarColor={Global.thirdColor}
        starSize= {20}/>
      </View>
		);
	}
}

const styles = StyleSheet.create({

});

export default Star;
