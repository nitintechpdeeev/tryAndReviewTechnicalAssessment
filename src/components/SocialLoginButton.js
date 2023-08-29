import React, {Component} from 'react';
import {Text, Dimensions, TouchableOpacity, Image} from 'react-native';
const mobileW = Dimensions.get('window').width;

export default class SocialLoginButton extends Component {
  render() {
    const {onPress, title, image} = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          marginTop: (mobileW * 3.8) / 100,
          alignSelf: 'center',
          borderRadius: (mobileW * 1.0) / 100,
          width: (mobileW * 78) / 100,
          paddingVertical: (mobileW * 3.0) / 100,
          backgroundColor: '#FEF7E9',
          borderColor: '#F87C3E',
          borderWidth: (mobileW * 0.2) / 100,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Image
          resizeMode="contain"
          style={{width: (mobileW * 5.0) / 100, height: (mobileW * 5.0) / 100}}
          source={image}
        />
        <Text
          style={{
            marginLeft: (mobileW * 1.0) / 100,
            color: '#F87C3E',
            fontSize: (mobileW * 3.8) / 100,
            fontWeight: '500',
            letterSpacing: 1,
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}
