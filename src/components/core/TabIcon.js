import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';


export default class TabIcon extends React.Component {
  render() {
    return (
      <Icon name={this.props.name} size={27} color={this.props.selected ? this.props.color : '#BBBBBB'}/>
    );
  };
}
