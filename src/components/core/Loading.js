import React from 'react';
import {
	View,
	StyleSheet,
	Image,
  Text
} from 'react-native';

import Images from './Images'

export default class Loading extends React.Component {
	render() {
		return (
			<View style={styles.activity_container}>
        <Image
          source={Images.albertLoad}
        style={{
          height: 150,
          width: 150
        }}/>
<Text>
  coucou loading
</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	activity_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
	}
});
