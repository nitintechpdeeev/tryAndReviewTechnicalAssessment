import React, {Component} from 'react';
import {
  View,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../utils.js/colors';
const mobileW = Dimensions.get('window').width;
const mobileH = Dimensions.get('window').height;

export default class AppPasswordTextInput extends Component {
  render() {
    const {
      value,
      onChangeText,
      secureTextEntry,
      placeholder,
      placeholderTextColor,
      keyboardType,
      eyePress,
    } = this.props;
    return (
      <View
        style={{
          marginTop: (mobileW * 5) / 100,
          alignSelf: 'center',
          flexDirection: 'row',
          borderRadius: (mobileW * 0) / 100,
          borderColor: colors.grey,
          width: (mobileW * 78) / 100,
          borderWidth: (mobileW * 0.2) / 100,
          justifyContent: 'space-between',
          backgroundColor: '#F8F9FD',
          paddingHorizontal: (mobileW * 2) / 100,
        }}>
        <TextInput
          style={{
            alignSelf: 'center',
            paddingVertical: (mobileW * 1.5) / 100,
            fontSize: (mobileW * 4.0) / 100,
            width: (mobileW * 65) / 100,
          }}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={'#B6B9BE'}
          maxLength={15}
          selectionColor={colors.black}></TextInput>
        <TouchableOpacity style={{alignSelf: 'center'}} onPress={eyePress}>
          <Image
            source={
              secureTextEntry
                ? require('../icons/hide.png')
                : require('../icons/visible.png')
            }
            style={{
              width: (mobileW * 5.0) / 100,
              height: (mobileW * 5.0) / 100,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
