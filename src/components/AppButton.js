import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
const mobileW = Dimensions.get('window').width;
const mobileH = Dimensions.get('window').height;

export default class AppButton extends Component {
  render() {
    const {onPress, title, width} = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          marginTop: (mobileW * 3.8) / 100,
          alignSelf: 'center',
          borderRadius: (mobileW * 1.0) / 100,
          width: width,
          paddingVertical: (mobileW * 3.0) / 100,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F87C3E',
        }}>
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: (mobileW * 4.0) / 100,
            fontWeight: '500',
            letterSpacing: 1,
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}
