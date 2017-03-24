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
import ContactProduct from '../components/products/ContactProduct';
import MapProduct from '../components/products/MapProduct';
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
      modality,
      tags,
      contact,
    } = this.props.product;

    console.log('product#rowdata is:', this.props.product);
    return(
      <ScrollView>
        <ImagesProduct
          image={image.url}/>
        <InfoProduct
          title={title}
          category={evenements.category.lvl1}
          date={evenements.realDateStart.slice(8,10)}
          month={evenements.realDateStart.slice(5,7)}
          place={place.name}
          address={place.address}
          city={place.city}
          description={leadText}
          hourStart={evenements.periodes[0].seances.length > 0 ? evenements.periodes[0].seances[0].hourStart.slice(0, 5) : '00:00'}
          hourEnd={evenements.periodes[0].seances.length > 0 ? evenements.periodes[0].seances[0].hourEnd.slice(0, 5) : '00:00' }
          price={modality.priceDetail}
          tags={tags}
          />
        <MapProduct
          title={title}
          longitude={place.lon}
          latitude={place.lat}
          />
        <ContactProduct
          reservation={modality.accessLink}
          webSite={contact.url}
          mail={modality.accessMail}
          phone={modality.accessPhone}
          facebook={contact.facebook}
          twitter={contact.twitter}/>
      </ScrollView>
    );
  }
}

export default ProductScene;
