import Config from './Config';

class Api {

getEvents(cat, callback) {
  console.log('getEvents cat is : ',cat);
  console.log(Config.host);
  fetch(`${Config.host}/api/events/?category=${cat}`)
    .then(res => res.json())
    .then(events => {
      console.log("events",events);
      callback(events)
    }).catch(error => {
      console.log(error);
    })
}

}

export default new Api();
