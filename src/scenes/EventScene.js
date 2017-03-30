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

import Api from '../Api';
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
      _id,
    } = this.props.product;
    console.log('SIMON event coucou this.props',this.props.idEvent);
    console.log('EventScene# product', this.props.product);
    console.log('EventScene# userid', Api.getUser()._id);
    return(
      <View>
        <ScrollView style={{backgroundColor:'#E9EBEE', paddingTop: (Platform.OS === 'ios') ? 20 : 0}}>
          <View style={{flex:9,}}>
            <ImagesProduct
              image={image.url}
              idEvent={_id}
            />
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
              priceType={modality.priceType}
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
        </ScrollView>
        <View style={{
           position: 'absolute',
           backgroundColor: 'transparent',
           bottom: 0,
           left: 0,
           right: 0,
         }}>
         <AlbertTab
            filter={false}/>
        </View>
      </View>
    );
  }
}

export default EventScene;
