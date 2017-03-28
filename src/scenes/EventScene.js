import React from 'react';

import {
  StyleSheet,
  ScrollView,
  Image,
  Platform,
  View,
} from 'react-native';

import {
  Actions,
} from 'react-native-router-flux';

import ImagesProduct from '../components/products/ImagesProduct';
import MapProduct from '../components/products/MapProduct';
import Favorites from '../components/user/Favorites';
import InfoEvent from '../components/products/Events/InfoEvent';
import ContactEvent from '../components/products/Events/ContactEvent';
import AlbertTab from '../components/core/AlbertTab';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    width: null,
  },
});

class EventScene extends React.Component {
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

    return(
      <ScrollView style={{backgroundColor:'#E9EBEE', paddingTop: (Platform.OS === 'ios') ? 20 : 0, flex:1,}}>
        <View style={{flex:9,}}>
        <ImagesProduct
          image={image.url}/>
        <InfoEvent
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
          address={place.address}
          longitude={place.lon}
          latitude={place.lat}
          />
        <ContactEvent
          reservation={modality.accessLink}
          webSite={contact.url}
          mail={contact.mail === null ? modality.accessMail : contact.mail}
          phone={modality.accessPhone === null ? contact.phone : modality.accessPhone}
          facebook={contact.facebook}
          twitter={contact.twitter}/>
      </View>
        <AlbertTab style={{flex:1,}} filter={false} back={true}/>
      </ScrollView>
    );
  }
}

export default EventScene;
