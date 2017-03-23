import React from 'react';

import {
  StyleSheet,
  ScrollView,
} from 'react-native';

import {
  Actions,
} from 'react-native-router-flux';

import ImagesProduct from '../components/products/ImagesProduct';
import InfoProduct from '../components/products/InfoProduct';
import Favorites from '../components/user/Favorites';

const styles = StyleSheet.create({

});

class ProductScene extends React.Component {
  render() {
    const {
      image,
      title,
      leadText,
      evenements,
      place,
    } = this.props.product;

    console.log('product#rowdata is:', this.props.product);
    return(
      <ScrollView>
        <ImagesProduct
          image={image.url}/>
        <InfoProduct
          title={title}
          category={evenements.category.lvl1}
          place={place.name}
          address={place.address}
          city={place.city}
          description={leadText}/>
      </ScrollView>
    );
  }

}

export default ProductScene;
